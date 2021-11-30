// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
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
const db = getDatabase();

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

  createUserWithEmailAndPassword(auth, email, password).then(cred => {
    console.log(cred);
  });
});

//sing up the user
