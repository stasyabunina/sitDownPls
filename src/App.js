import Burger from './Burger';
import CatalogController from './CatalogController';
import config from './config';
import HomeController from './HomeController';
import ProductController from './ProductController';

export default class App {
  constructor(element) {
    this.element = element;
    this.pathname = undefined;
  }

  bindToDOM() {
    this.cityDropdown = this.element.querySelector('.header-top__select');
    this.categoryDropdown = this.element.querySelector('.header-bottom__select');
    this.burger = this.element.querySelector('.burger');
    this.burgerMenu = this.element.querySelector('.header-middle__nav-wrapper');
  }

  init() {
    this.bindToDOM();

    this.lazyload();
    this.choicesInit();
    new Burger(this.burger, this.burgerMenu);

    this.pathname = window.location.pathname;
    let controller;

    if (this.pathname.endsWith(config.catalogUrl)) {
      controller = new CatalogController(this.element);
    } else if (this.pathname.endsWith(config.productUrl)) {
      controller = new ProductController(this.element)
    } else {
      controller = new HomeController(this.element)
    }

    controller.init();
  }

  lazyload() {
    window.onload = function () {
      lazyload();
    };
  }

  choicesInit() {
    new Choices(this.cityDropdown, {
      searchEnabled: false,
      itemSelectText: '',
      allowHTML: true,
    });

    new Choices(this.categoryDropdown, {
      searchEnabled: false,
      itemSelectText: '',
      placeholder: true,
      allowHTML: true,
    });
  }
}
