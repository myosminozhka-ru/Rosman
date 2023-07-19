function toggleClassOnResize() {
  const element = document.querySelector('.js-traceable-planet');
  if (!element) {
    return;
  }

  let currentClass = 'z-0';

  function updateClass() {
    currentClass = currentClass === 'z-0' ? 'z-1' : 'z-0';
    element.classList.remove('z-0', 'z-1');
    element.classList.add(currentClass);
  }

  window.addEventListener('resize', updateClass);
}

toggleClassOnResize();
