import '../sass/main.scss';
//Сюда импортируем все свои джеес модули
import createCardMovies from '../templates/cardMovie.hbs';
import Api from './apiFetch';

const refs = {
  cardList: document.querySelector('.cards-movie-list'),
};

const api = new Api();

//Разметка карточек по запросу на бэк
api.fetchMovie().then(data => {
  onRatingFixedNumber(data);
  refs.cardList.insertAdjacentHTML('beforeend', createCardMovies(data));
});

//запрос данных для жанров (возвращает массив объектов с свойствами жанров)
api.fetchGenres().then(data => {
  return data;
});

// перезаписывает значение рейтинга
function onRatingFixedNumber(data) {
  data.forEach(el => {
    return (el.vote_average = number(el.vote_average));
  });
  // console.log(data);
}

//добавляет к одинарному символу знак после запятой
function number(qval) {
  if (qval.toString().length === 1) {
    return '.0'.padStart(3, qval);
  }
  return qval;
}

//отрезает от даты релиза символы после 4-го знака
// api.fetchMovie().then(data => {
//   const year = data.map(el => {
//     const dataStr = el.release_date;
//     // .slice(0, 4)
//     // console.log(dataStr);
//     return dataStr;
//   });
//   // console.log(year)
// });

//Заменяет значение жанра на строку с именем жанра
// const genreIds = data.map(el => el.genre_ids);
// console.log(genreIds)
// const comparison = genreIds.forEach(element => {
// console.log(api.fetchGenres(element).then(console.log))
// api.fetchGenres(element).then();
// });
// })


