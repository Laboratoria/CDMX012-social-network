// aqui exportaras las funciones que necesites
/*
export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
}; */
// Import the functions you need from the SDKs you need
import { onNavigate } from '../main.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAC5Xdg_jFGY0p6OJSwkX52fkXRqdKnjqw',
  authDomain: 'yummy-65cbb.firebaseapp.com',
  projectId: 'yummy-65cbb',
  storageBucket: 'yummy-65cbb.appspot.com',
  messagingSenderId: '857667491932',
  appId: '1:857667491932:web:94c7de43766d973cedae99',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export function iniciarSesion() {
  const autentificar = getAuth();
  onAuthStateChanged(autentificar, (user) => {
    if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      alert('Estas logueado');
      onNavigate('/muro');
    } else {
      console.log(user.uid);
      alert('No estas logueado :( ');
    }
  });
}
export function usuarioExistente() {
  const emailLogin = document.getElementById('email').value;
  const contraseñaLogin = document.getElementById('contraseña').value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, emailLogin, contraseñaLogin)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode);
      const errorMessage = error.message;
      alert(errorMessage);
    });
}
export function registrar() {
  const email = document.getElementById('emailRegi').value;
  const contraseña = document.getElementById('contraseñaRegi').value;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, contraseña)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage + errorCode);
      // ..
    });
}
