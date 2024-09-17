export default class Burger {
  constructor(element, menu) {
    this.element = element;
    this.menu = menu;

    this.init();
  }

  bindToDOM() {
    this.burgerClose = this.menu.querySelector('.header-middle__close');
    this.menuLinks = this.menu.querySelectorAll('.header-middle__item');
    this.menuLinksTwo = this.menu.querySelectorAll('.header-middle__item-two');
  }

  init() {
    this.bindToDOM();
    this.addEventListeners();
  }

  addEventListeners() {
    this.element.addEventListener('click', () => {
      this.menu.classList.toggle('header-middle__nav-wrapper--active');
      document.body.classList.toggle('stop-scroll');
    });

    this.burgerClose.addEventListener('click', () => {
      this.menu.classList.toggle('header-middle__nav-wrapper--active');
      document.body.classList.toggle('stop-scroll');
    });

    this.menuLinks.forEach((el) => {
      el.addEventListener('click', () => {
        this.menu.classList.remove('header-middle__nav-wrapper--active');
        document.body.classList.remove('stop-scroll');
      });
    });

    this.menuLinksTwo.forEach((el) => {
      el.addEventListener('click', () => {
        this.menu.classList.remove('header-middle__nav-wrapper--active');
        document.body.classList.remove('stop-scroll');
      });
    });
  }
}
