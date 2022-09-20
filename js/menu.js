(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header-mob__button'),
    closeMenuBtn: document.querySelector('.menu-button-close'),
    menu: document.querySelector('.head-mob__modal'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
