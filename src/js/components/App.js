import Burger from './Burger.js';
import CatalogController from './CatalogController.js';
import config from './config.js';
import HomeController from './HomeController.js';
import ProductController from './ProductController.js';

export default class App {
  constructor(element) {
    this.element = element;
  }

  bindToDOM() {
    this.cityDropdown = this.element.querySelector('.header-top__select');
    this.categoryDropdown = this.element.querySelector('.header-bottom__select');
    this.burgerEl = this.element.querySelector('.burger');
    this.burgerMenu = this.element.querySelector('.header-middle__nav-wrapper');
  }

  init() {
    this.bindToDOM();

    this.lazyload();
    this.choicesInit();
    this.burger = new Burger(this.burgerEl, this.burgerMenu);

    this.pathname = window.location.pathname;
    let controller;

    if (this.pathname.endsWith(config.catalogUrl)) {
      controller = new CatalogController(this.element);
    } else if (this.pathname.endsWith(config.productUrl)) {
      controller = new ProductController(this.element);
    } else {
      controller = new HomeController(this.element);
    }

    controller.init();
  }

  lazyload() {
    window.onload = function () {
      lazyload();
    };
  }

  choicesInit() {
    this.cityDropdownChoices = new Choices(this.cityDropdown, {
      searchEnabled: false,
      itemSelectText: '',
      allowHTML: true,
    });

    this.categoryDropdownChoices = new Choices(this.categoryDropdown, {
      searchEnabled: false,
      itemSelectText: '',
      placeholder: true,
      allowHTML: true,
    });
  }
}
