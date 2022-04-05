/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import { auth } from './firebase-config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider, signOut,
} from './firebase-imports.js';
import { onNavigate } from '../main.js';

// Create new users with email acc
export const createNewUsers = (username, email, password) => {
  // clave para au
  createUserWithEmailAndPassword(auth, email, password) // Crea el usuario
    .then((userCredential) => {
      console.log('User created');
      alert('User created');
      onNavigate('/home');
    })
    .catch((error) => {
      const errorCode = error.code;
      const authError = document.getElementById('pError');

      if (errorCode === 'auth/invalid-email') {
        authError.textContent = 'Write a valid mail example@gmail.com';
        alert('write a valid mail example@gmail.com');
      }
      if (errorCode === 'auth/weak-password') {
        authError.textContent = 'Your Password must have 6 characters at least';
        alert('Your Password must have 6 characters at least');
      }
      if (errorCode === 'auth/email-already-in-use') {
        authError.textContent = 'This email is in use, try another or logIn';
        alert('This email is in use, try another or logIn.');
      }
    });
};

export const shootIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert('You are In!');
      onNavigate('/home');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password, try again.');
      }
      if (errorCode === 'auth/invalid-email') {
        alert('write a valid email');
      }
    });
};

// Google Login
const providerGoogle = new GoogleAuthProvider();

export const googleSignIn = () => {
  signInWithPopup(auth, providerGoogle)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      onNavigate('/home');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

// Sign up with Facebook
const providerFb = new FacebookAuthProvider();

export const signUpFacebook = () => {
  signInWithPopup(auth, providerFb)
    .then((result) => {
      // the signed in-user info.
      const user = result.user;
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      // ...
      onNavigate('/home');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
    });
};

export const logOut = () => {
  signOut(auth)
    .then(() => {
      onNavigate('/');
    }).catch((error) => {
      alert(error);
    });
};
