import createCardMovies from '../templates/cardMovie.hbs';
import Api from './apiFetch';

//==============Карточка фильма============================

const refs = {
  cardList: document.querySelector('.cards-movie-list'),
};

const api = new Api();

// export default class MarkupCardMovie { }

// запрос данных для жанров (возвращает массив объектов с свойствами жанров)
api.fetchGenres().then(genres => {
  genres.forEach(el => {
    genresArrayStr.push(el);
  })
});

const genresArrayStr = []

// Заменяет значение жанра на строку с именем жанра
function onRemoveGenres(data) {
  data.forEach(el => {
    (el.genre_ids = onComparingArrayAndObject(el.genre_ids, genresArrayStr));
    return 
  });
}

//итерация числового массива по значению свойства (id) объекта 
function onComparingArrayAndObject(arr, obj) {
  let genresStr = []
  arr.forEach(el => {
    const values = Object.values(obj);
    values.forEach(value => {
      if (value.id == el) {
        genresStr.push(' ' + value.name)
      }
    });
    return;
  })
  return genresStr;
}

//Разметка карточек фильмов по запросу на бэк
api.fetchMovie().then(data => {
  onRatingFixedNumber(data);
  onFilmReleaseYear(data);
  onRemoveGenres(data); 
  refs.cardList.insertAdjacentHTML('beforeend', createCardMovies(data));
});

// перезаписывает значение рейтинга с числом после запятой
function onRatingFixedNumber(data) {
  data.forEach(el => {
    (el.vote_average = el.vote_average.toFixed(1));
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

//========================================================