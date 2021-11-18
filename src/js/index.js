import '../sass/main.scss';
//Сюда импортируем все свои джеес модули
import createCardMovies from '../templates/cardMovie.hbs';
import Api from './apiFetch';
import modalTeam from '../js/modal-team';
const refs = {
  cardList: document.querySelector('.cards-movie-list'),
};

const api = new Api();

//Разметка карточек по запросу на бэк
api.fetchMovie().then(data => {
  const genreIds = data.map(el => el.genre_ids);
  // console.log(genreIds)

  const comparison = genreIds.forEach(element => {
    // console.log(api.fetchGenres(element).then(console.log))
    api.fetchGenres(element).then();
  });

  // console.log(comparison)
  return refs.cardList.insertAdjacentHTML('beforeend', createCardMovies(data));
});
// .catch(console.log(error))

api.fetchGenres().then(data => {
  // console.log(data)
  // const genreName = data.map(el => el);
  const genreName = data;
  // console.log(genreName)
  return genreName;
});
