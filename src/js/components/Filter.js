export default class Filter {
  constructor(element) {
    this.element = element;

    this.init();
  }

  bindToDOM() {
    this.svgs = this.element.querySelectorAll('.filter__btn-svg');
    this.btns = this.element.querySelectorAll('.filter__btn');
    this.sublist = this.element.querySelectorAll('.filter__sublist');
  }

  init() {
    this.bindToDOM();

    this.addEventListeners();
  }

  addEventListeners() {
    this.btns.forEach((item) => {
      item.addEventListener('click', () => {
        let dropdown = item.parentElement.querySelector('.filter__sublist');

        this.sublist.forEach((el) => {
          if (el !== dropdown) {
            el.classList.remove('filter__sublist--active');
          }
        });

        dropdown.classList.toggle('filter__sublist--active');

        this.svgs.forEach((el) => {
          el.classList.toggle('filter__btn-svg--reversed');

          if (el !== item.querySelector('.filter__btn-svg')) {
            el.classList.remove('filter__btn-svg--reversed');
          }
        });
      });
    });

    document.addEventListener('click', (e) => {
      let target = e.target;
      if (!target.closest('.filter__list')) {
        this.sublist.forEach((el) => {
          el.classList.remove('filter__sublist--active');
        });

        this.svgs.forEach((el) => {
          el.classList.remove('filter__btn-svg--reversed');
        });
      }
    });
  }
}
