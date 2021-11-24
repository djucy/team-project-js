import Api from './apiFetch';
import onError from './markupCardMovie';
// import createCardMovies from '../templates/cardMovie.hbs';
import markupCardMovie from './markupCardMovie';
import onCreateMarkup from './markupCardMovie';
import fetchMovie from './apiFetch';
import MY_KEY from './apiFetch';
import BASE_URL from './apiFetch';
import refs from './refs';


const api = new Api();

refs.libraryLink.addEventListener('click', onLibraryDraw);
refs.libraryHomeLink.addEventListener('click', onHomeDraw);

// Отрисовка библиотеки, пока она пустая
function onLibraryDraw() {
  refs.libraryHeader.classList.remove('header-hidden');
  refs.homeHeader.classList.add('header-hidden');
  refs.cardsMovieList.innerHTML = '';
}

// Возврат на домашнюю страницу


  function  onHomeDraw() {
  refs.homeHeader.classList.remove('header-hidden');
    refs.libraryHeader.classList.add('header-hidden');
    fetchHomePage();
}

function fetchHomePage() {
  api.fetchMovie()
  .then(data => {
    onCreateMarkup(data);
    console.log(data);
  })
    .catch(onError);
  
  api
  .fetchGenres()
  .then(genres => {
    genres.forEach(el => {
      genresArrayStr.push(el);
    });
  })
  .catch(onError);

  const genresArrayStr = [];
  
}

// то что работает у Димы, просто поставить как есть//

// refs.libraryHomeLink.addEventListener('click', onHomeDraw);
//   function  onHomeDraw() {
//   refs.homeHeader.classList.remove('header-hidden');
//     refs.libraryHeader.classList.add('header-hidden');
//   api.fetchMovie()
//   .then(data => {
//     // onCreateMarkup(data);
//     console.log(data);
//   })
//   .catch(onError);

// }