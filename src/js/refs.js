export default {
  // =====================Карточка фильма=========================
  cardsMovieList: document.querySelector('.js-cards-movie-list'),
  searchForm: document.querySelector('.js-movies-search'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),

  // =====================Спиннер=================================
  preloader: document.querySelector('.preloader'),
  // =============================================================

  textInputError: document.querySelector('.js-text-input-error'),
  homeLink: document.querySelector('.home-link'),
  libraryLink: document.querySelector('.library-link'),
  libraryHeader: document.querySelector('.js-library__header'),
  loginLink: document.querySelector('.login-link'),
  signLink: document.querySelector('.sign-link'),
  loginPage: document.querySelector('.login-modal'),
  signPage: document.querySelector('.sign-modal'),
  signCloseButton: document.querySelector('.signup-close'),
  loginCloseButton: document.querySelector('.login-close'),

  homeHeader: document.querySelector('.js-home__header'),
  libraryHomeLink: document.querySelector('.library-home__link'),
  // genreSearchLink: document.querySelectorAll('.js-genres'),
  filmoteka: document.querySelector('.logo__text'),
  libraryFilmoteka: document.querySelector('.js-library__text'),
  icon: document.querySelector('.icon-style'),
  libraryIcon: document.querySelector('.filmoteka'),

  // buttonAddWatched: document.querySelector('.')
  buttonWatchedRender: document.getElementById('library-watched__button'),
  buttonQueuedRender: document.getElementById('library-queued__button'),
  buttonAddToWatchet: document.querySelector('.button-watched'),
  buttonAddToQueue: document.querySelector('.button-queue'),
};
