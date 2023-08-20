if (document.querySelector('.filter')) {
  let filterSvg = document.querySelectorAll('.filter__btn-svg');
  let filterBtn = document.querySelectorAll('.filter__btn');
  let filterSublist = document.querySelectorAll('.filter__sublist');

  filterBtn.forEach(item => {
    item.addEventListener("click", function () {
      let dropdown = this.parentElement.querySelector(".filter__sublist");

      filterSublist.forEach(el => {
        if (el != dropdown) {
          el.classList.remove("filter__sublist--active");
        }
      })

      dropdown.classList.toggle("filter__sublist--active");

      filterSvg.forEach(el => {
        el.classList.toggle('filter__btn-svg--reversed');

        // const activeBtn = el.closest('button');
        // const selectedSvg = activeBtn.querySelector('.filter__btn-svg');

        if (el != this.querySelector('.filter__btn-svg')) {
          el.classList.remove('filter__btn-svg--reversed')
        }
      })
    })
  });

  document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".filter__list")) {
      filterSublist.forEach(el => {
        el.classList.remove("filter__sublist--active");
      });

      filterSvg.forEach(el => {
        el.classList.remove('filter__btn-svg--reversed')
      })
    }
  });
};
