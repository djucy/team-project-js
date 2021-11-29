export {onTitleClick} from '../js/movieDescriptionFullsize';

import {Api, BASE_URL, MY_KEY} from './apiFetch';
import cardMovieModal from '../templates/card_movie_modal.hbs';
import markupCardMovie from './markupCardMovie';


const api = new Api;

const refs = {

    modalRef: document.querySelector('.js-lightbox__detailes'),
    movieName: document.querySelectorAll('.card-movie__title'),
    cardsMovieList: document.querySelector('.js-cards-movie-list'),
    buttonClsDetailes: document.querySelector('[data-detailes-close]'),
    inputCardMovie: document.querySelector('.js-modal-detailes'),
    imgCardMovie: document.querySelectorAll('.img_movie'),
    movieName: document.querySelectorAll('.about_movie__title'),
    describeMovie: document.querySelector('.detailes-movie'),

};
 console.log(refs.movieName);
refs.cardsMovieList.addEventListener('click', onTitleClick);
refs.buttonClsDetailes.addEventListener('click', onMovieDescriptionDetailesClose)

function onTitleClick(event) {
    
    
    event.preventDefault();
    if (event.target.nodeName !== 'H3') {
        return;
    }
   console.log(event.target.closest('li').dataset.id);
  
    api.id = event.target.closest('li').dataset.id;
 
    api.fetchDescribeMovie()
        .then(data => appendMovieCard(data))
        .catch(error => console.error);
  
    refs.modalRef.classList.add('is-open');
    
   
}

function onMovieDescriptionDetailesClose() {
    refs.modalRef.classList.remove('is-open');
    refs.inputCardMovie.innerHTML = '';
}

function appendMovieCard(movie) {
    
  
    return refs.inputCardMovie.insertAdjacentHTML('beforeend', cardMovieModal(movie));

}



