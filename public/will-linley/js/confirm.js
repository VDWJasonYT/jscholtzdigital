(function () {
  const api = window.TicketsAPI;
  const $ = (s) => document.querySelector(s);
  const params = new URLSearchParams(location.search);
  const saved = JSON.parse(sessionStorage.getItem('jsdDemoCheckout') || 'null');

  function render(order) {
    $('#status').textContent = 'Your demo tickets are ready. They are not valid for entry.';
    const box = $('#tickets');
    box.innerHTML = '';
    (order.tickets || []).forEach((t) => {
      const card = document.createElement('article');
      card.className = 'ticket-card';
      card.innerHTML =
        '<h2>' + t.sectionName + '</h2>' +
        '<p>Row ' + t.row + ' · Seat ' + t.num + ' · ' + t.tierName + '</p>' +
        '<img alt="Demo ticket QR for seat ' + t.seatId + '" width="200" height="200">' +
        '<p><a class="btn" href="' + t.download + '">Download PDF ticket</a></p>';
      const img = card.querySelector('img');
      img.src = api.apiBase + '/api/qr?d=' + encodeURIComponent(t.qr);
      box.appendChild(card);
    });
    $('#meta').textContent = 'Order ' + order.orderId + ' · R' + order.amountZar + ' sandbox payment';
  }

  async function load() {
    const payment = params.get('payment') || (saved && saved.paymentId) || '';
    const orderId = params.get('order') || '';
    let lastErr = null;
    for (let i = 0; i < 8; i++) {
      try {
        const q = orderId ? { order: orderId } : { payment: payment };
        const order = await api.order(q);
        render(order);
        return;
      } catch (e) {
        lastErr = e;
        if (e.status !== 404) break;
        await new Promise((r) => setTimeout(r, 800));
      }
    }
    // Sandbox ITN may not reach us. Complete the demo sale with the checkout token.
    if (saved && saved.simulateToken && saved.holdId) {
      try {
        const sim = await api.simulate({
          holdId: saved.holdId,
          simulateToken: saved.simulateToken,
          paymentId: saved.paymentId,
        });
        const order = await api.order({ order: sim.orderId });
        render(order);
        $('#note').textContent = 'PayFast sandbox did not send an ITN in time, so this demo completed the sale with a signed test token. Tickets are still not valid for entry.';
        return;
      } catch (e) {
        lastErr = e;
      }
    }
    $('#status').textContent = (lastErr && lastErr.message) || 'We could not find that order yet.';
  }

  load();
})();
