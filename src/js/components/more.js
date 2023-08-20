if (document.querySelector('.rating')) {
  const btnMore = document.querySelector('.rating__btn');
  const itemsLength = document.querySelectorAll('.rating__item').length;

  if (window.matchMedia("(max-width: 1200px) and (min-width: 963px)").matches) {
    let items = 6;
    btnMore.addEventListener('click', function () {
      items += 3;
      const array = Array.from(document.querySelector('.rating__list').children);
      const visItems = array.slice(0, items);
      visItems.forEach(function (el) {
        el.classList.add('rating__item--visible')
      });
      if (visItems.length === itemsLength) {
        btnMore.classList.add('rating__btn--hidden');
      }
    })
  } else if (window.matchMedia("(max-width: 962px) and (min-width: 320px)").matches) {
    let items = 6;
    btnMore.addEventListener('click', function () {
      items += 2;
      const array = Array.from(document.querySelector('.rating__list').children);
      const visItems = array.slice(0, items);
      visItems.forEach(function (el) {
        el.classList.add('rating__item--visible')
      });
      if (visItems.length === itemsLength) {
        btnMore.classList.add('rating__btn--hidden');
      }
    })
  } else {
    let items = 8;
    btnMore.addEventListener('click', function () {
      items += 4;
      const array = Array.from(document.querySelector('.rating__list').children);
      const visItems = array.slice(0, items);
      visItems.forEach(function (el) {
        el.classList.add('rating__item--visible')
      });
      if (visItems.length === itemsLength) {
        btnMore.classList.add('rating__btn--hidden');
      }
    })
  }
};
