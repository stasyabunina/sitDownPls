let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-middle__nav-wrapper');
let menuLinksOne = menu.querySelectorAll('.header-middle__item');
let menuLinksTwo = menu.querySelectorAll('.header-middle__item-two');
let closeNav = document.querySelector('.header-middle__close');

burger.addEventListener('click',
  function () {
    menu.classList.toggle('header-middle__nav-wrapper--active');
    document.body.classList.toggle('stop-scroll')
});

closeNav.addEventListener('click',
  function () {
    menu.classList.toggle('header-middle__nav-wrapper--active');
    document.body.classList.toggle('stop-scroll')
});

menuLinksOne.forEach(function (el) {
  el.addEventListener('click', function () {
    menu.classList.remove('header-middle__nav-wrapper--active');
    document.body.classList.remove('stop-scroll')
  })
});

menuLinksTwo.forEach(function (el) {
  el.addEventListener('click', function () {
    menu.classList.remove('header-middle__nav-wrapper--active');
    document.body.classList.remove('stop-scroll')
  })
});
