(function () {
  const api = window.TicketsAPI;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s);

  const state = {
    event: null,
    selected: [],
    hold: null,
    timer: null,
  };

  function money(zar) {
    const n = Number(zar);
    return 'R' + n.toFixed(0);
  }

  function setErr(msg) {
    const el = $('#err');
    if (el) el.textContent = msg || '';
  }

  function renderSelected() {
    const list = $('#sel-list');
    const total = $('#total');
    list.innerHTML = '';
    let cents = 0;
    state.selected.forEach((s) => {
      cents += Math.round(parseFloat(s.priceZar) * 100);
      const li = document.createElement('li');
      li.innerHTML = '<span>' + s.sectionName + ' · Row ' + s.row + ' · Seat ' + s.num + '</span><span>' + money(s.priceZar) + '</span>';
      list.appendChild(li);
    });
    total.textContent = money((cents / 100).toFixed(2));
    $('#pay-btn').disabled = !state.hold || state.selected.length === 0;
    $('#hold-timer').textContent = state.hold
      ? 'Seats held for you'
      : state.selected.length
        ? 'Click Continue to hold these seats'
        : 'Pick seats on the map, or use Best available';
  }

  function startTimer(expiresAt) {
    if (state.timer) clearInterval(state.timer);
    function tick() {
      const left = Math.max(0, new Date(expiresAt).getTime() - Date.now());
      const m = Math.floor(left / 60000);
      const s = Math.floor((left % 60000) / 1000);
      const el = $('#hold-timer');
      if (left <= 0) {
        el.textContent = 'Hold expired. Please pick seats again.';
        state.hold = null;
        state.selected = [];
        if (state.map) state.map.setMine([]);
        renderSelected();
        clearInterval(state.timer);
        return;
      }
      el.textContent = 'Seats held for ' + m + ':' + String(s).padStart(2, '0');
    }
    tick();
    state.timer = setInterval(tick, 250);
  }

  async function refreshAvail() {
    const data = await api.availability();
    $('#live-count').textContent =
      data.available + ' of ' + data.total + ' seats still open';
    if (state.map) state.map.setAvailability(data, state.selected.map((s) => s.id));
    return data;
  }

  async function holdSeats(ids, best, count) {
    setErr('');
    const body = best ? { bestAvailable: true, count: count } : { seats: ids };
    const hold = await api.hold(body);
    state.hold = hold;
    state.selected = hold.seats;
    if (state.map) state.map.setMine(hold.seats.map((s) => s.id));
    startTimer(hold.expiresAt);
    renderSelected();
    await refreshAvail();
  }

  function wireHeroTilt() {
    if (reduced) return;
    const hero = $('.hero-copy');
    const stage = $('.hero');
    if (!hero || !stage || window.matchMedia('(pointer: coarse)').matches) return;
    stage.addEventListener('pointermove', (e) => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      hero.style.transform = 'rotateY(' + x * 8 + 'deg) rotateX(' + -y * 6 + 'deg) translateZ(20px)';
    });
    stage.addEventListener('pointerleave', () => { hero.style.transform = ''; });
  }

  function setupMedia() {
    document.querySelectorAll('video[data-auto]').forEach((v) => {
      if (reduced) {
        v.removeAttribute('autoplay');
        v.pause();
        v.setAttribute('hidden', '');
        return;
      }
      v.muted = true;
      v.playsInline = true;
      v.play().catch(() => {});
    });
  }

  function postPayfast(action, fields) {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = action;
    Object.entries(fields).forEach(([k, v]) => {
      const i = document.createElement('input');
      i.type = 'hidden';
      i.name = k;
      i.value = v;
      form.appendChild(i);
    });
    document.body.appendChild(form);
    form.submit();
  }

  async function init() {
    setupMedia();
    wireHeroTilt();
    const ev = await api.event();
    state.event = ev;
    $('#date-label').textContent = ev.dateLabel;
    $('#time-label').textContent = ev.timeLabel;
    $('#venue-label').textContent = ev.venueName;
    $('#addr-label').textContent = ev.venueAddress;
    $('#price-gold').textContent = money(ev.tiers.golden.priceZar);
    $('#price-mid').textContent = money(ev.tiers.mid.priceZar);
    $('#price-rear').textContent = money(ev.tiers.rear.priceZar);

    const viewport = $('#map-viewport');
    state.map = window.SeatMap.createMap(viewport, ev);
    state.map.fit();
    window.addEventListener('resize', () => state.map.fit());
    state.map.onSeat(async (id, el) => {
      if (el.classList.contains('sold') || (el.classList.contains('held') && !el.classList.contains('mine'))) return;
      const ids = state.selected.map((s) => s.id);
      const i = ids.indexOf(id);
      if (i >= 0) ids.splice(i, 1);
      else {
        if (ids.length >= ev.maxSeatsPerOrder) {
          setErr('You can pick up to ' + ev.maxSeatsPerOrder + ' seats');
          return;
        }
        ids.push(id);
      }
      try {
        if (state.hold) {
          await api.release(state.hold.holdId).catch(() => {});
          state.hold = null;
        }
        if (!ids.length) {
          state.selected = [];
          state.map.setMine([]);
          renderSelected();
          await refreshAvail();
          return;
        }
        await holdSeats(ids);
      } catch (e) {
        setErr(e.message);
        await refreshAvail();
      }
    });

    $('#zoom-in').addEventListener('click', () => state.map.zoomIn());
    $('#zoom-out').addEventListener('click', () => state.map.zoomOut());
    $('#zoom-fit').addEventListener('click', () => state.map.fit());
    const tiltBtn = $('#tilt-toggle');
    const plane = document.querySelector('.map-plane');
    if (window.innerWidth < 900) {
      plane.classList.add('flat');
      tiltBtn.setAttribute('aria-pressed', 'false');
      tiltBtn.textContent = '3D view';
      state.map.fit();
    }
    tiltBtn.addEventListener('click', () => {
      const on = plane.classList.toggle('flat');
      tiltBtn.setAttribute('aria-pressed', on ? 'false' : 'true');
      tiltBtn.textContent = on ? '3D view' : 'Flat view';
      state.map.fit();
    });

    $('#best-btn').addEventListener('click', async () => {
      const n = Math.max(1, Math.min(ev.maxSeatsPerOrder, Number($('#best-count').value) || 2));
      try {
        if (state.hold) await api.release(state.hold.holdId).catch(() => {});
        await holdSeats([], true, n);
      } catch (e) {
        setErr(e.message);
      }
    });

    $('#pay-btn').addEventListener('click', async () => {
      setErr('');
      const name = $('#name').value.trim();
      const email = $('#email').value.trim();
      const phone = $('#phone').value.trim();
      if (!state.hold) return setErr('Hold your seats first');
      try {
        const out = await api.checkout({ holdId: state.hold.holdId, name, email, phone });
        sessionStorage.setItem(
          'jsdDemoCheckout',
          JSON.stringify({
            paymentId: out.paymentId,
            holdId: out.holdId,
            simulateToken: out.simulateToken,
            amountZar: out.amountZar,
          })
        );
        postPayfast(out.payfast.action, out.payfast.fields);
      } catch (e) {
        setErr(e.message);
      }
    });

    await refreshAvail();
    setInterval(() => refreshAvail().catch(() => {}), 15000);
    renderSelected();
  }

  init().catch((e) => {
    setErr(e.message || 'Could not load the ticket map');
    console.error(e);
  });
})();
