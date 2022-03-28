/* eslint-disable import/no-cycle */
// Import the functions you need from the SDKs you need
import {
  getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,
  FacebookAuthProvider, GithubAuthProvider, getAdditionalUserInfo, signInWithEmailAndPassword,
  signOut,
} from '../firebase-imports.js';
import { app } from './firebase-config.js';
import { onNavigate } from '../app.js';
import { showSignUpError } from '../ui.js';

// Init firebase app
const auth = getAuth(app);

// Navigate to add-info page
function askMoreInfo(result) {
  onNavigate('/add-info');

  const moreInfoUser = document.querySelector('#signUpForm');

  if (result.providerId === 'google.com' || result.providerId === 'facebook.com') {
    moreInfoUser.name.value = result.user.displayName;
  }
}

// Sign up with email and password
export const createAccount = (email, pass) => {
  const errorA = document.getElementById('errorArea');

  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      askMoreInfo(userCredential);
      /* const user = userCredential.user;
      console.log(user); */
      errorA.innerHTML = '';
    })
    .catch((error) => {
      showSignUpError(error);
    });
};

// Sign up with Google
const googleProvider = new GoogleAuthProvider();

export const signUpGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      if (getAdditionalUserInfo(result).isNewUser) {
        askMoreInfo(result);
      } else {
        /* console.log('Already registered'); */
        onNavigate('/home');
      }
    });
  /* .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorMessage);
    }); */
};

// Sign up with Facebook
const facebookProvider = new FacebookAuthProvider();

export const signUpFacebook = () => {
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      if (getAdditionalUserInfo(result).isNewUser) {
        askMoreInfo(result);
      } else {
        /* console.log('Already registered'); */
        onNavigate('/home');
      }
    });
/* .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
    }); */
};

// Sign up with Github
const githubProvider = new GithubAuthProvider();

export const signUpGithub = () => {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      /* const credential = GithubAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user); */
      if (getAdditionalUserInfo(result).isNewUser) {
        askMoreInfo(result);
      } else {
        /* console.log('Already registered'); */
        onNavigate('/home');
      }
    });
  /* .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GithubAuthProvider.credentialFromError(error);
    }); */
};

// sign in with email and password in welcome back page
export const signInAccount = (email, pass) => signInWithEmailAndPassword(auth, email, pass);

// Sign Out

export const signOutBR = () => signOut(auth);
