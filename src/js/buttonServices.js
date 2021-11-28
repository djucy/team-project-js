
import MY_KEY from './apiFetch';
import BASE_URL from './apiFetch';
import refs from './refs';
import Api from './apiFetch';
import onError from './markupCardMovie';
import {fetchHomePage} from './pageSwitch';

const genreApi = new Api();

import { onCreateMarkup, onRatingFixedNumber } from './markupCardMovie';

refs.buttonWatchedRender.addEventListener('click', onWatchedRender());
refs.buttonQueuedRender.addEventListener('click', onQueuedRender());
refs.buttonAddToWatchet.addEventListener('click', onAddToWatched());
refs.buttonAddToQueue.addEventListener('click', addToQueue());
 function onWatchedRender(){
    // console.log('hello');
};

function onQueuedRender() {
    //  console.log('queue');
};

function onAddToWatched() {
    // console.log('add to watched');
    // localStorage.setItem('watched:');
}
function addToQueue() {
    // console.log('queueueueue');
}