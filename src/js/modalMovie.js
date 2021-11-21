import cardMovieModal from '../templates/card_movie_modal.hbs';

export default function modalMovie() {
    // const dataSource = [];
  
  const refs = {
    movieCards: document.querySelector('.js-cards-movie-list'),
    movieModal: document.querySelector('.lightbox'),
    backdropOverlay: document.querySelector('.lightbox__overlay'),
    movieContent: document.querySelector('.lightbox__content'),
    closeModal: document.querySelector('[data-action="close-lightbox"]'),
    createCardMovie: document.querySelector('.card_modal')
  }

  refs.movieModal.addEventListener('click', onModalClick);
  refs.movieCards.addEventListener('click', onPictureClick);
  refs.closeModal.addEventListener('click', onCloseModalClick);

  // открытие модалки при клике на картинку из галереи фильмов

  function onPictureClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('card-movie__img')) {
      return;
    }

    refs.movieModal.classList.add('is-open');
    refs.movieContent.src = evt.target.dataset.source;
    console.log(refs.movieContent.src);
}

// закрывается по кнопке

function onCloseModalClick() {
    refs.movieModal.classList.remove('is-open');
    refs.movieContent.src = '';
  };
  
// при клике на бэкдроп закрывается модалка
  
function onModalClick(evt) {
    if (refs.backdropOverlay === evt.target) {
      onCloseModalClick();
    }
  };

  // при клике на ESC закрывается модалка

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      onCloseModalClick();
      }
    })
  }


  // function markupOutput(markup) {
  //   refs.outputCountry.innerHTML = '';
  //   if (markup) refs.outputCountry.insertAdjacentHTML('afterbegin', markup);
  //   return;
  // }

  