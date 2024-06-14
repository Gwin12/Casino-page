document.addEventListener('DOMContentLoaded', function () {
  Splitting();
  ScrollOut({
    threshold: 0.2,
    once: true,
  });

  document.querySelectorAll('[data-scroll]').forEach((element, index) => {
    element.style.setProperty('--section-index', index);
  });
});
