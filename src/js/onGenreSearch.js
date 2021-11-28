
import MY_KEY from './apiFetch';
import BASE_URL from './apiFetch';
import refs from './refs';
import Api from './apiFetch';
import onError from './markupCardMovie';
import {fetchHomePage} from './pageSwitch';

// refs.genreSearchLink.addEventListener('click', onGenreSearch);

const genreApi = new Api();

import { onCreateMarkup, onRatingFixedNumber } from './markupCardMovie';
const buttonWatchedModal = document.querySelector('.button-watched-modal');

buttonWatchedModal.addEventListener('click', onWatchedAdd);

async function onWatchedAdd(){
    console.log('hey-ho');
};

 