import '../sass/main.scss';
//Сюда импортируем все свои джеес модули
import createCardMovies from '../templates/cardMovie.hbs';
import Api from './apiFetch';

const refs = {
  cardList: document.querySelector('.cards-movie-list'),
}

const api = new Api();

api.fetchMovie()
  .then((data) => {
      // console.log(data)
      // console.log(data.release_date);
      // const relData = data.map(el => el.release_date.slice(0, 4))
      // console.log(relData)
      return refs.cardList.insertAdjacentHTML('beforeend', createCardMovies(data))
  })
    // .catch(console.log(error))

