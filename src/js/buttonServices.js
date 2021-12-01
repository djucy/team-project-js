import MY_KEY from './apiFetch';
import BASE_URL from './apiFetch';

import Api from './apiFetch';
import onError from './markupCardMovie';
import { fetchHomePage } from './pageSwitch';
import { modalMovie } from './modalMovie';
import { onCreateMarkup, onRatingFixedNumber } from './markupCardMovie';
import refs from './refs';
import { getLibrary } from './auth';
const genreApi = new Api();

// console.log(refs.buttonAddToWatchet);
refs.buttonWatchedRender.addEventListener('click', onWatchedRender);
refs.buttonQueuedRender.addEventListener('click', onQueuedRender);

function onWatchedRender() {
  getLibrary('wached');
}

function onQueuedRender() {
  getLibrary('queue');
}
