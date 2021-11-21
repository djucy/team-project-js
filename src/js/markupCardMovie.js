import createCardMovies from '../templates/cardMovie.hbs';
import Api from './apiFetch';
import modalMovie from './modalMovie';

const refs = {
  cardList: document.querySelector('.cards-movie-list'),
  searchInput: document.querySelector('.placeholder'),
  cardsMovieList: document.querySelector('.js-cards-movie-list'),
  searchForm: document.querySelector('.js-movies-search'),
};

const api = new Api();

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

//Разметка карточек фильмов по запросу на бэк
api
  .fetchMovie()
  .then(data => {
    onRatingFixedNumber(data);
    onFilmReleaseYear(data);
    onRemoveGenres(data);
    modalMovie();
    refs.cardList.insertAdjacentHTML('beforeend', createCardMovies(data));
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

//==============Поиск фильма============================

api
  .fetchSearch()
  .then(data => {
    data.forEach(el => console.log(el.title));
    onRatingFixedNumber(data);
    onFilmReleaseYear(data);
    onRemoveGenres(data);

    refs.cardList.insertAdjacentHTML('beforeend', createCardMovies(data));
    refs.searchForm.addEventListener('change', onSearchMovies);
    // console.log()
  })
  .catch(onError);

function onSearchMovies(evt) {
  evt.preventDefault();

  console.dir(api.fetchSearch(refs.searchInput.value));
  api.fetchSearch(refs.searchInput.value).then(data => {
    console.log(data);
    onRatingFixedNumber(data);
    onFilmReleaseYear(data);
    onRemoveGenres(data);
    refs.cardList.insertAdjacentHTML('beforeend', createCardMovies(data));
  });
}

refs.searchForm.addEventListener('submit', onSearchMovies);

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

api.fetchMovie()
  .then(data => console.log(data))