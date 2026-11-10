(function (w) {
  const TIER_FILL = { golden: '#e8c36a', mid: '#8fd0c8', rear: '#c9b7a4' };

  function createMap(viewport, event) {
    const plane = viewport.querySelector('.map-plane');
    const inner = viewport.querySelector('.map-inner');
    const svgNS = 'http://www.w3.org/2000/svg';
    const layout = event.layout;
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + layout.width + ' ' + layout.height);
    svg.setAttribute('width', layout.width);
    svg.setAttribute('height', layout.height);
    svg.setAttribute('role', 'application');
    svg.setAttribute('aria-label', 'Seat map of Graceland Arena, 1000 seats');
    svg.setAttribute('tabindex', '0');

    const stage = document.createElementNS(svgNS, 'rect');
    stage.setAttribute('class', 'stage-rect');
    stage.setAttribute('x', layout.stage.x);
    stage.setAttribute('y', layout.stage.y);
    stage.setAttribute('width', layout.stage.w);
    stage.setAttribute('height', layout.stage.h);
    stage.setAttribute('rx', 8);
    svg.appendChild(stage);
    const sl = document.createElementNS(svgNS, 'text');
    sl.setAttribute('class', 'stage-label');
    sl.setAttribute('x', layout.stage.x + layout.stage.w / 2);
    sl.setAttribute('y', layout.stage.y + layout.stage.h / 2 + 6);
    sl.textContent = 'STAGE';
    svg.appendChild(sl);

    const nodes = new Map();
    Object.values(layout.sections).forEach((sec) => {
      const lab = document.createElementNS(svgNS, 'text');
      lab.setAttribute('class', 'section-label');
      lab.setAttribute('x', sec.x + 6);
      lab.setAttribute('y', sec.y + 12);
      lab.textContent = sec.name;
      svg.appendChild(lab);
      sec.seats.forEach((s) => {
        const r = document.createElementNS(svgNS, 'rect');
        r.setAttribute('class', 'seat available');
        r.setAttribute('data-id', s.id);
        r.setAttribute('x', s.x);
        r.setAttribute('y', s.y);
        r.setAttribute('width', s.w);
        r.setAttribute('height', s.h);
        r.setAttribute('rx', 2.5);
        r.setAttribute('tabindex', '-1');
        r.setAttribute('role', 'button');
        r.setAttribute('aria-label', 'Seat ' + s.id);
        r.style.fill = TIER_FILL[event.sections.find((x) => x.id === s.id.split('-')[0]).tier] || '#ccc';
        svg.appendChild(r);
        nodes.set(s.id, r);
      });
    });
    inner.innerHTML = '';
    inner.appendChild(svg);

    let state = { sold: new Set(), held: new Set(), mine: new Set() };
    let scale = 1, tx = 0, ty = 0;
    let dragging = false, lastX = 0, lastY = 0, pointers = new Map();
    let pinch = 0;

    function apply() {
      inner.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + scale + ')';
    }
    function fit() {
      const vbW = layout.width, vbH = layout.height;
      const cw = viewport.clientWidth, ch = viewport.clientHeight;
      const narrow = window.innerWidth < 900;
      if (narrow) {
        scale = Math.min((cw / vbW) * 0.98, (ch / vbH) * 1.35);
        tx = (cw - vbW * scale) / 2;
        ty = 16;
      } else {
        scale = Math.min(cw / vbW, ch / vbH) * 0.98;
        tx = (cw - vbW * scale) / 2;
        ty = (ch - vbH * scale) / 2 + 8;
      }
      apply();
    }
    function zoomAt(cx, cy, factor) {
      const next = Math.max(0.4, Math.min(6, scale * factor));
      const k = next / scale;
      tx = cx - (cx - tx) * k;
      ty = cy - (cy - ty) * k;
      scale = next;
      apply();
    }

    function paint() {
      nodes.forEach((el, id) => {
        el.classList.remove('available', 'held', 'sold', 'mine');
        if (state.mine.has(id)) el.classList.add('mine', 'available');
        else if (state.sold.has(id)) {
          el.classList.add('sold');
          el.style.fill = '#3a342e';
        } else if (state.held.has(id)) {
          el.classList.add('held');
          el.style.fill = '#6a3b34';
        } else {
          el.classList.add('available');
          const sec = id.split('-')[0];
          const meta = event.sections.find((x) => x.id === sec);
          el.style.fill = TIER_FILL[(meta && meta.tier) || 'mid'];
        }
        el.setAttribute('aria-pressed', state.mine.has(id) ? 'true' : 'false');
        el.setAttribute('aria-disabled', state.sold.has(id) || (state.held.has(id) && !state.mine.has(id)) ? 'true' : 'false');
      });
    }

    function setAvailability(data, mineIds) {
      state.sold = new Set(data.sold || []);
      state.held = new Set(data.held || []);
      state.mine = new Set(mineIds || state.mine);
      paint();
    }

    viewport.addEventListener('pointerdown', (e) => {
      viewport.setPointerCapture(e.pointerId);
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 1) {
        dragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
      } else if (pointers.size === 2) {
        const pts = [...pointers.values()];
        pinch = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      }
    });
    viewport.addEventListener('pointermove', (e) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2) {
        const pts = [...pointers.values()];
        const d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        if (pinch) {
          const rect = viewport.getBoundingClientRect();
          zoomAt((pts[0].x + pts[1].x) / 2 - rect.left, (pts[0].y + pts[1].y) / 2 - rect.top, d / pinch);
        }
        pinch = d;
        return;
      }
      if (!dragging) return;
      tx += e.clientX - lastX;
      ty += e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      apply();
    });
    function endPointer(e) {
      pointers.delete(e.pointerId);
      if (pointers.size < 2) pinch = 0;
      if (pointers.size === 0) dragging = false;
    }
    viewport.addEventListener('pointerup', endPointer);
    viewport.addEventListener('pointercancel', endPointer);
    viewport.addEventListener('wheel', (e) => {
      e.preventDefault();
      const rect = viewport.getBoundingClientRect();
      zoomAt(e.clientX - rect.left, e.clientY - rect.top, e.deltaY < 0 ? 1.12 : 1 / 1.12);
    }, { passive: false });

    let lastFocus = null;
    svg.addEventListener('keydown', (e) => {
      const ids = [...nodes.keys()];
      if (!lastFocus) lastFocus = ids[Math.floor(ids.length / 2)];
      const cur = parseId(lastFocus);
      let next = lastFocus;
      if (e.key === 'ArrowRight') next = findNeighbor(ids, cur, 1, 0) || lastFocus;
      if (e.key === 'ArrowLeft') next = findNeighbor(ids, cur, -1, 0) || lastFocus;
      if (e.key === 'ArrowDown') next = findNeighbor(ids, cur, 0, 1) || lastFocus;
      if (e.key === 'ArrowUp') next = findNeighbor(ids, cur, 0, -1) || lastFocus;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const el = nodes.get(lastFocus);
        if (el) el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        return;
      }
      if (next !== lastFocus) {
        e.preventDefault();
        lastFocus = next;
        const el = nodes.get(next);
        if (el) el.focus();
      }
    });

    function parseId(id) {
      const p = id.split('-');
      return { sec: p[0], row: +p[1], num: +p[2], id };
    }
    function findNeighbor(ids, cur, dx, dy) {
      const set = new Set(ids);
      if (dy === 0) {
        const cand = cur.sec + '-' + pad(cur.row) + '-' + pad(cur.num + dx);
        if (set.has(cand)) return cand;
        return null;
      }
      const cand = cur.sec + '-' + pad(cur.row + dy) + '-' + pad(cur.num);
      if (set.has(cand)) return cand;
      return null;
    }
    function pad(n) { return String(n).padStart(2, '0'); }

    return {
      svg,
      nodes,
      fit,
      zoomIn: () => zoomAt(viewport.clientWidth / 2, viewport.clientHeight / 2, 1.2),
      zoomOut: () => zoomAt(viewport.clientWidth / 2, viewport.clientHeight / 2, 1 / 1.2),
      setAvailability,
      setMine(ids) { state.mine = new Set(ids); paint(); },
      onSeat(fn) {
        svg.addEventListener('click', (e) => {
          const el = e.target.closest('.seat');
          if (!el) return;
          lastFocus = el.getAttribute('data-id');
          fn(lastFocus, el);
        });
      },
    };
  }

  w.SeatMap = { createMap, TIER_FILL };
})(window);
