
import cardMovieModal from '../templates/card_movie_modal.hbs';
import markupCardMovie from './markupCardMovie';

export { onTitleClick } from '../js/movieDescriptionFullsize';

const refs = {

    modalRef: document.querySelector('.js-lightbox__detailes'),
    movieName: document.querySelectorAll('.card-movie__title'),
    cardsMovieList: document.querySelector('.js-cards-movie-list'),
    buttonClsDetailes: document.querySelector('[data-detailes-close]'),
    inputCardMovie: document.querySelector('.js-modal-detailes'),
    imgCardMovie: document.querySelectorAll('.img_movie'),
    movieName: document.querySelectorAll('.about_movie__title')

};

refs.cardsMovieList.addEventListener('click', onTitleClick);
refs.buttonClsDetailes.addEventListener('click', onMovieDescriptionDetailesClose)

function onTitleClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'H3') {
        return;

    }
    refs.modalRef.classList.add('is-open');
    
    appendMovieCard();
    // refs.imgCardMovie.src = event.target.dataset.source;
    // refs.movieName.innerHTML = event.target.value

}

function onMovieDescriptionDetailesClose() {
    refs.modalRef.classList.remove('is-open');
    refs.inputCardMovie.innerHTML = '';
}

function appendMovieCard(movie) {
    const movieCard = cardMovieModal(movie);
    
    return refs.inputCardMovie.insertAdjacentHTML('beforeend', movieCard);
    
  

}


// function onPictureClick(event) {
//     event.preventDefault();
//     if (event.target.nodeName !== 'IMG') {
//         return;
//     }
//     refs.modalRef.classList.add('is-open');
//     refs.lightBoxImageRef.src = event.target.srcset;
//     console.log(refs.lightBoxImageRef.src)
//  }

// function onCloseModalWindow(event) {
//   refs.modalRef.classList.remove('is-open');
//   refs.lightBoxImageRef.src = '';  
// }
 