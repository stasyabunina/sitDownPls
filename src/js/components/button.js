if (document.querySelector('.collection')) {
  let collectionBtn = document.querySelector('.collection__btn');

  collectionBtn.addEventListener('click',
    function () {
      window.location.href = 'catalog.html';
  })
};

if (document.querySelector('.rating')) {
  let ratingBtn = document.querySelectorAll('.rating__card-btn');

  ratingBtn.forEach(function (el) {
    el.addEventListener('click', function () {
      window.location.href = 'product.html';
    })
  })
};

if (document.querySelector('.offers')) {
  let offersBtn = document.querySelectorAll('.offers__swiper-button');

  offersBtn.forEach(function (el) {
    el.addEventListener('click', function () {
      window.location.href = 'product.html';
    })
  })
};

if (document.querySelector('.similar')) {
  let similarBtn = document.querySelectorAll('.similar__card-btn');

  similarBtn.forEach(function (el) {
    el.addEventListener('click', function () {
      window.location.href = 'product.html';
    })
  })
};

if (document.querySelector('.catalog')) {
  let catalogBtn = document.querySelectorAll('.catalog__card-btn');

  catalogBtn.forEach(function (el) {
    el.addEventListener('click', function () {
      window.location.href = 'product.html';
    })
  })
};
