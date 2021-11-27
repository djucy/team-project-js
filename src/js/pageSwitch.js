import Api from './apiFetch';
import onError from './markupCardMovie';
import createCardMovies from '../templates/cardMovie.hbs';
import refs from './refs';

const apiHome = new Api();


refs.libraryLink.addEventListener('click', onLibraryDraw);
refs.libraryHomeLink.addEventListener('click', onHomeDraw);
refs.homeLink.addEventListener('click', onHomeDraw);
refs.filmoteka.addEventListener('click', onHomeDraw);
refs.libraryFilmoteka.addEventListener('click', onHomeDraw);
refs.icon.addEventListener('click', onHomeDraw);
refs.libraryIcon.addEventListener('click', onHomeDraw)

// Отрисовка библиотеки, пока она пустая
function onLibraryDraw() {
  refs.libraryHeader.classList.remove('header-hidden');
  refs.homeHeader.classList.add('header-hidden');
  refs.cardsMovieList.innerHTML = '';
}

// Возврат на домашнюю страницу


function onHomeDraw() {
  refs.searchForm.reset();
    refs.cardsMovieList.innerHTML = '';
  refs.homeHeader.classList.remove('header-hidden');
  refs.libraryHeader.classList.add('header-hidden');
  fetchHomePage();
  
}

import { onCreateMarkup, onRatingFixedNumber, resetMarkup} from './markupCardMovie';
  
export function fetchHomePage() {
  apiHome.fetchMovie()
  .then(data => {
    onCreateMarkup(data);
    
  })
    .catch(onError);
  
  apiHome
  .fetchGenres()
  .then(genres => {
    genres.forEach(el => {
      genresArrayStr.push(el);
    });
  })
  .catch(onError);

  const genresArrayStr = [];
  
}

