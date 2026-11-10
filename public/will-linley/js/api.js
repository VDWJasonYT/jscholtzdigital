(function (w) {
  const cfg = w.JSD_TICKETS || {};
  const API = String(cfg.apiBase || '').replace(/\/$/, '');

  async function req(path, opts) {
    const res = await fetch(API + path, {
      ...opts,
      headers: { 'Content-Type': 'application/json', ...((opts && opts.headers) || {}) },
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const err = new Error(data.error || 'Request failed');
      err.status = res.status;
      err.data = data;
      throw err;
    }
    return data;
  }

  w.TicketsAPI = {
    apiBase: API,
    event: () => req('/api/event'),
    availability: () => req('/api/availability'),
    hold: (body) => req('/api/hold', { method: 'POST', body: JSON.stringify(body) }),
    release: (holdId) => req('/api/release', { method: 'POST', body: JSON.stringify({ holdId }) }),
    checkout: (body) => req('/api/checkout', { method: 'POST', body: JSON.stringify(body) }),
    order: (q) => req('/api/order?' + new URLSearchParams(q).toString()),
    simulate: (body) => req('/api/simulate-itn', { method: 'POST', body: JSON.stringify(body) }),
    scan: (body) => req('/api/scan', { method: 'POST', body: JSON.stringify(body) }),
  };
})(window);
