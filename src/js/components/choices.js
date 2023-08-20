const elementOne = document.querySelector('.header-top__select');
const choicesOne = new Choices(elementOne, {
  searchEnabled: false,
  itemSelectText: '',
  allowHTML: true,
});

const elementTwo = document.querySelector('.header-bottom__select');
const choicesTwo = new Choices(elementTwo, {
  searchEnabled: false,
  itemSelectText: '',
  placeholder: true,
  allowHTML: true,
});

