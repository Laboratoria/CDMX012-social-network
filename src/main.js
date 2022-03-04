// import { myFunction } from './lib/index.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcC9x7vCU7X9Dc0b8mM2L4RNcL97800qs",
  authDomain: "bookreads-9192a.firebaseapp.com",
  projectId: "bookreads-9192a",
  storageBucket: "bookreads-9192a.appspot.com",
  messagingSenderId: "512279860959",
  appId: "1:512279860959:web:75245200f515c09571fb6a",
  measurementId: "G-3327QVYEY6"
};

// First sign up and sign in btns

const btnSignUpLP = document.querySelector('#btn-signUp-LP');
const btnSignInLP = document.querySelector('#btn-signIn-LP');
const signUpContainer = document.querySelector('.createAccount-container');
const signInContainer = document.querySelector('.enterAccount-container');
const signUpInContainer= document.querySelector('.sign-up-in-container');

btnSignUpLP.addEventListener('click', () => {
  signUpContainer.style.visibility = 'visible';
  signUpInContainer.style.visibility = 'hidden';
});

btnSignInLP.addEventListener('click', () => {
  signInContainer.style.visibility = 'visible';
  signUpInContainer.style.visibility = 'hidden';
});



// Init firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// sign up for users
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');

const createAccount = async () => {
    const email = txtEmail.value;
    const password = txtPassword.value;
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
    } catch (error) {
      console.log(error);
    }
  };
  
  const btnSignUp = document.getElementById('btn-signUp');
  btnSignUp.addEventListener('click', createAccount);
  





