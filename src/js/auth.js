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
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import { onCloseModalClick } from './signup';

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

const querySnapshot = getDocs(collection(db, 'Films')).then(snapShot => console.log(snapShot.docs));
console.log(querySnapshot);

//lisend auth changed
onAuthStateChanged(auth, user => {
  console.log(user);
});

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
