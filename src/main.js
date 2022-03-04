// Este es el punto de entrada de tu aplicacion

 import { myFunction } from './lib/index.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

// sign up for users
let signUpForm = document.querySelector("#signUpForm");
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = signUpForm.email.value;
    const password = signUpForm.password.value;
    //faltaria ver el username
    createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        console.log('user created:', cred.user);
        signUpForm.reset();
    })
    .catch((err) => {
        console.log(err.message);
    });
});