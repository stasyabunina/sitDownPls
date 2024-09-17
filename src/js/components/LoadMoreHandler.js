export default class LoadMoreHandler {
  constructor(btn, items) {
    this.btn = btn;
    this.itemsLength = items.length;
    this.items = items;

    this.init();
  }

  init() {
    if (window.matchMedia('(max-width: 1200px) and (min-width: 963px)').matches) {
      let items = 6;
      this.btn.addEventListener('click', () => {
        items += 3;
        const array = Array.from(this.items);
        const visItems = array.slice(0, items);
        visItems.forEach(function (el) {
          el.classList.add('rating__item--visible');
        });
        if (visItems.length === this.itemsLength) {
          this.btn.classList.add('rating__btn--hidden');
        }
      });
    } else if (window.matchMedia('(max-width: 962px) and (min-width: 320px)').matches) {
      let items = 6;
      this.btn.addEventListener('click', () => {
        items += 2;
        const array = Array.from(this.items);
        const visItems = array.slice(0, items);
        visItems.forEach(function (el) {
          el.classList.add('rating__item--visible');
        });
        if (visItems.length === this.itemsLength) {
          this.btn.classList.add('rating__btn--hidden');
        }
      });
    } else {
      let items = 8;
      this.btn.addEventListener('click', () => {
        items += 4;
        const array = Array.from(this.items);
        const visItems = array.slice(0, items);
        visItems.forEach(function (el) {
          el.classList.add('rating__item--visible');
        });
        if (visItems.length === this.itemsLength) {
          this.btn.classList.add('rating__btn--hidden');
        }
      });
    }
  }
}
