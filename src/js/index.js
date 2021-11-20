import '../sass/main.scss';
//Сюда импортируем все свои джеес модули
import createCardMovies from '../templates/cardMovie.hbs';
import Api from './apiFetch';
// import modalTeam from './modal-team';

//==============Карточка фильма============================

const refs = {
  cardList: document.querySelector('.cards-movie-list'),
};

const api = new Api();
const genresArrayStr = [
  { id: 28, name: ' Action' },
  {id: 12, name: ' Adventure'},
  {id: 16, name: ' Animation'},
  {id: 35, name: ' Comedy'},
  {id: 80, name: ' Crime'},
  {id: 99, name: ' Documentary'},
  {id: 18, name: ' Drama'},
  {id: 10751, name: ' Family'},
  {id: 14, name: ' Fantasy'},
  {id: 36, name: ' History'},
  {id: 27, name: ' Horror'},
  {id: 10402, name: ' Music'},
  {id: 9648, name: ' Mystery'},
  {id: 10749, name: ' Romance'},
  {id: 878, name: ' Science Fiction'},
  {id: 10770, name: 'TV Movie'},
  {id: 53, name: ' Thriller'},
  {id: 10752, name: ' War'},
  { id: 37, name: ' Western' },
];
// console.log(genresArrayStr)

//Разметка карточек фильмов по запросу на бэк
api.fetchMovie().then(data => {
  onRatingFixedNumber(data);
  onFilmReleaseYear(data);
  onRemoveGenres(data); //Поменять названия функций!!!
  refs.cardList.insertAdjacentHTML('beforeend', createCardMovies(data));
});

// запрос данных для жанров (возвращает массив объектов с свойствами жанров)
// api.fetchGenres().then(genres => {
//   genres.forEach(el => {
//     genresArrayStr.push(el);
//   })
// });

// Заменяет значение жанра на строку с именем жанра
function onRemoveGenres(data) {
  data.forEach(el => {
    (el.genre_ids = onComparingArrayAndObject(el.genre_ids, genresArrayStr));
    return 
  });
}

//итерация числового массива по значению свойства (id) объекта 
function onComparingArrayAndObject(arr, obj) {
  let genresStr = [];
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



// onRemoveGenres()

// function onRemoveGenres() {
  
// }


// function onComparingArrayAndObject() {
  
//  }
// });

//========================================================