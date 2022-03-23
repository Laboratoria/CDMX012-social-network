import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
// Your web app's Firebase configuration
// import {
//   getDatabase,
//   set,
//   ref,
//   update,
// } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { onNavigate } from "../main.js";
import { firebaseConfig } from "./firebase-config.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export function registeNewUsers(emailRegister, paswordRegister) {
  // let usuarioVerificado = {};

  createUserWithEmailAndPassword(auth, emailRegister, paswordRegister)
    .then((userCredential) => {
      onNavigate("/Timeline");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode || errorMessage);
    });
}

export const isLogin = (emailLogin, passwordLogin) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (user) {
        console.log(user);
        onNavigate("/Timeline");
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode || errorMessage);
    });
};

export const authenticationObserver = () => {
  // usar firebase onauth state change
  // si esta login invocar onnavigate a time line
  // si no esta login invocar onavigate a /
  // https://firebase.google.com/docs/auth/web/manage-users?hl=es
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
      console.log("se ejecuta la funcion observador");
      onNavigate("/Timeline");
    } else {
      // User is signed out
      // ...
      onNavigate("/");
    }
  });
};
