 (function () {
    const timeEl = document.querySelector('[data-testid="test-user-time"]');
    function tick() {
      const now = Date.now();
      timeEl.textContent = now;
      timeEl.setAttribute('datetime', new Date(now).toISOString());
    }
    tick();
    setInterval(tick, 1000);
  })();