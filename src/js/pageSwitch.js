const refs = {
  homeLink: document.querySelectorAll('.home-link'),
  libraryLink: document.querySelector('.library-link'),
  libraryHeader: document.querySelector('.js-library__header'),
  homeHeader: document.querySelector('.js-home__header'),
  libraryContainer: document.querySelector('.js-cards-movie-list'),
  libraryHomeLink: document.querySelector('.library-home__link'),
};

refs.libraryLink.addEventListener('click', onLibraryDraw);
refs.libraryHomeLink.addEventListener('click', onHomeDraw);

// Отрисовка библиотеки, пока она пустая
function onLibraryDraw() {
  refs.libraryHeader.classList.remove('header-hidden');
  refs.homeHeader.classList.add('header-hidden');
  refs.libraryContainer.innerHTML = '';
}

// Возврат на домашнюю страницу
function onHomeDraw() {
  refs.homeHeader.classList.remove('header-hidden');
  refs.libraryHeader.classList.add('header-hidden');
}
