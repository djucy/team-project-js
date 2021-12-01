// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, set, onValue, child, get } from 'firebase/database';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import refs from './refs';

import { onCloseModalClick } from './signup';
import { modalMovie } from './modalMovie';

export { addTolibrary, getLibrary };

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAJzIBI49kNEjCBspClSg_cyjv5pSZJboM',
  authDomain: 'filmoteka-web.firebaseapp.com',
  databaseURL: 'https://filmoteka-web-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'filmoteka-web',

  appId: '1:721758304226:web:3e0be2b32b95d9b7ca2bbb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

//get data
function getLibrary(path) {
  getDocs(collection(db, path)).then(snapShot => {
    setupQueue(snapShot.docs);
  });
}

//add films
function addTolibrary(obj, path) {
  addDoc(collection(db, path), obj);
}
//drow queue
refs.cardsMovieList;

const setupQueue = data => {
  let html = '';
  let newArr = [];
  let markupArr = [];
  data.forEach(doc => {
    if (doc.data().markup) {
      newArr.push(doc.data());
      markupArr = newArr.map(el => (el = el.markup));
    }
  });
  const uniqeArr = new Set(markupArr);
  uniqeArr.forEach(el => {
    const li = `
    <li class="card-list__item">
${el}
   </li>
  `;
    html += li;
  });

  refs.cardsMovieList.innerHTML = html;
};

//lisend auth changed
onAuthStateChanged(auth, user => {});

//sign up

const signForm = document.querySelector('#sign-form');
const submitButton = signForm.querySelector('.pseudo-button');

submitButton.addEventListener('click', () => {
  signForm.requestSubmit();
});
console.log(submitButton);
signForm.addEventListener('submit', e => {
  e.preventDefault();

  //get user info
  const email = signForm['sign-imput'].value;
  const password = signForm['sing-pass'].value;

  //sing up the user

  createUserWithEmailAndPassword(auth, email, password).then(cred => {
    signForm.reset();
  });
});

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', e => {
  e.preventDefault();
  signOut(auth);
  onCloseModalClick();
});

const loginForm = document.querySelector('#login-form');

const loginButton = document.querySelector('.login-pseudo-button');
console.log(loginButton);
loginButton.addEventListener('click', () => {
  loginForm.requestSubmit();
});
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  //get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-pass'].value;

  signInWithEmailAndPassword(auth, email, password).then(cred => {
    console.log(cred.user);
  });
  loginForm.reset();
  onCloseModalClick();
});
