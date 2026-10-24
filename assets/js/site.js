// Small-screen menu. Without JavaScript the navigation links simply stay visible.
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;
  toggle.hidden = false;
  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    if (open) nav.setAttribute('data-open', ''); else nav.removeAttribute('data-open');
  }
  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
})();
