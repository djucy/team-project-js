import createCardMovies from '../templates/cardMovie.hbs';
import refs from './refs';
import Api from './apiFetch';
import modalMovie from './modalMovie';
import {createPaginationTrending, createPaginationSearch, container} from './pagination';

export {onCreateMarkup, onRatingFixedNumber, onError};

const api = new Api();

refs.searchForm.addEventListener('submit', onSearchMovies);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

//==============Карточка фильма============================
// запрос данных для жанров (возвращает массив объектов с свойствами жанров)
api
  .fetchGenres()
  .then(genres => {
    genres.forEach(el => {
      genresArrayStr.push(el);
    });
  })
  .catch(onError);

const genresArrayStr = [];

// Заменяет значение жанра на строку с именем жанра
function onRemoveGenres(data) {
  data.forEach(el => {
    el.genre_ids = onComparingArrayAndObject(el.genre_ids, genresArrayStr);
    return;
  });
}

//итерация числового массива по значению свойства (id) объекта
function onComparingArrayAndObject(arr, obj) {
  let genresStr = [];
  arr.forEach(el => {
    const values = Object.values(obj);
    values.forEach(value => {
      if (value.id == el) {
        genresStr.push(' ' + value.name);
      }
    });
    return;
  });
  return genresStr;
}

// Разметка карточек фильмов по запросу на бэк
api
  .fetchMovie()
  .then(data => {
    onCreateMarkup(data);
    createPaginationTrending(data);
    console.log(data.results);
  })
  .catch(onError);

// перезаписывает значение рейтинга с числом после запятой
function onRatingFixedNumber(data) {
  data.forEach(el => {
    el.vote_average = el.vote_average.toFixed(1);
    return;
  });
}

// перезаписывает значение даты на год
function onFilmReleaseYear(data) {
  data.forEach(el => {
    return (
      (el.release_date = onSliceNumber(el.release_date)) ||
      (el.first_air_date = onSliceNumber(el.first_air_date))
    );
  });
}

//отрезает лишние символы и остается год. Так приходит с бека "2021-11-11"
function onSliceNumber(release) {
  if (release == undefined) {
    return;
  }
  return release.slice(0, 4);
}

function onError() {
  return console.log('Search result not successful. Enter the correct movie name and');
}

// function onCardImage() {
//   if (poster_path === null) {
//     poster_path = unnamed_min.png
//   }
// }

function normalRatingYearGenres(data) {
  onRatingFixedNumber(data.results);
  onFilmReleaseYear(data.results);
  onRemoveGenres(data.results);
}

function onCreateMarkup(data) {
  normalRatingYearGenres(data);
  refs.cardsMovieList.insertAdjacentHTML('afterbegin', createCardMovies(data.results));
  return data.results;
}

//==============Поиск фильма============================

function onSearchMovies(e) {
  e.preventDefault();
  api.query = e.currentTarget.elements.query.value;
  resetMarkup();
  api
    .fetchSearch(e)
    .then(data => {
      onCreateMarkup(data);
      container.innerHTML = '';
      createPaginationSearch(data, api.query);
    })
    .catch(onError);
}

function resetMarkup() {
  refs.cardsMovieList.innerHTML = '';
  api.resetPageNumber();
}

// ===================================================
// Подгрузка страниц
function onLoadMore() {
  api
    .fetchSearch()
    .then(data => {
      return refs.cardsMovieList.insertAdjacentHTML('beforeend', createCardMovies(data.results));
    })
    .catch(onError);
  //  onScroll();
}

// function onScroll() {
//   refs.loadMoreBtn.scrollIntoView({
//     behavior: 'smooth',
//     block: 'end',
//   });
// }

// document.addEventListener('scroll', () => {
//     const documentRect = document.documentElement.getBoundingClientRect();
//     if (documentRect.bottom < document.documentElement.clientHeight + 300) {
//         onLoadMore();
//     }
// })

// ===================================================

// refs.searchForm.addEventListener('submit', onSearchMovies);

// function onSearchMovies(evt) {
//   evt.preventDefault();
//   resetCardMarkup();
//   console.log(api.query)
//   api.query = evt.target.elements.query.value;
//   console.log(api.query)
//   )
// }

// function resetCardMarkup() {
//   refs.cardsMovieList.innerHTML = '';
//   api.resetPageNumber();
// }
// ===================================================

