// Mobile nav toggle. Progressive enhancement: without JS the links stay
// reachable because the stylesheet only hides them at narrow widths.
(function () {
  var btn = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close the menu after tapping a link (same-page anchors would otherwise
  // leave the panel covering the content).
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
