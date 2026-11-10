(function () {
  const api = window.TicketsAPI;
  const $ = (s) => document.querySelector(s);
  $('#scan-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    $('#result').textContent = 'Checking…';
    try {
      const out = await api.scan({
        pin: $('#pin').value,
        qr: $('#qr').value,
      });
      const label = {
        admitted: 'Admitted (demo)',
        already_used: 'Already scanned',
        valid: 'Valid (not marked)',
        invalid: 'Invalid',
      }[out.result] || out.result;
      $('#result').textContent =
        label + ' · ' + (out.sectionName || '') + ' row ' + (out.row || '') + ' seat ' + (out.num || '') +
        (out.guest ? ' · ' + out.guest : '') +
        (out.note ? ' · ' + out.note : '');
    } catch (err) {
      $('#result').textContent = err.message;
    }
  });
})();
