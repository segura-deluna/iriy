// BURGER MENU //

const burger = document.querySelector('.header-mob__burger'),
  mobMenu = document.querySelector('.header-mob__menu');
burger.addEventListener('click', (e) => {
  e.preventDefault();
  mobMenu.classList.toggle('active');
  burger.classList.toggle('active');
});


