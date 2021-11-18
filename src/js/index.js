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
  onRatingFixedNumber();// нужно както залить в шаблон на место vote_average
  refs.cardList.insertAdjacentHTML('beforeend', createCardMovies(data));
});

//запрос данных для жанров (возвращает массив объектов с свойствами жанров)
api.fetchGenres().then(data => {
  return data;
});

  //добавляет в рейтинг знак после запятой
function onRatingFixedNumber() {
  api.fetchMovie()
    .then(data => {
      data.forEach(el => el.vote_average.toFixed([1]))
    })
}

//отрезает от даты релиза символы после 4-го знака
api.fetchMovie().then(data => {
  const year = data.map(el => {
    const dataStr = el.release_date
    // .slice(0, 4)
    // console.log(dataStr);
    return dataStr;
  })
  // console.log(year)
})

//Заменяет значение жанра на строку с именем жанра  
  // const genreIds = data.map(el => el.genre_ids);
  // console.log(genreIds)
  // const comparison = genreIds.forEach(element => {
    // console.log(api.fetchGenres(element).then(console.log))
    // api.fetchGenres(element).then();
  // });
// })

