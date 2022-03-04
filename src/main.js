// import { myFunction } from './lib/index.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, getRedirectResult, signOut } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';
import { GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';
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
  measurementId: "G-3327QVYEY6",
};

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

  //vincular cuenta con otros proveedores
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

async function signInWithPopup(auth, googleProvider) {
    try {
        const credential = await GoogleAuthProvider.credentialFromResult(auth);
        console.log(userCredential.user);
      } catch (error) {
        console.log(error);
      }
}

};
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  