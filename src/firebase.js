import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, getAdditionalUserInfo } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';
import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js';
import { app } from './firebase-config.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const appFirebase = initializeApp(app);
export const auth = getAuth(appFirebase);

// Sign up with email and password
export const createAccount = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);

// Sign un with Google
const googleProvider = new GoogleAuthProvider();

export const signUpGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
    /* if (getAdditionalUserInfo(result).isNewUser){
      askMoreInfo(result);
    } else { */
      console.log('Already registered');
    /* } */
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorMessage);
    });
};

// Sign un with Facebook
const facebookProvider = new FacebookAuthProvider();

export const signUpFacebook = () => {
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
    /* if (getAdditionalUserInfo(result).isNewUser){
      askMoreInfo(result);
    } else { */
      console.log('Already registered');
    },
    ).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
    });
};

// Sign up with Github
const githubProvider = new GithubAuthProvider();

export const signUpGithub = () => {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      /* if (getAdditionalUserInfo(result).isNewUser) {
        askMoreInfo(result);
      } else {
        console.log('Already registered');
      } */
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
    });
};

// sign in with email and password in welcome back page 
export const signInAccount = (email, pass) => signInWithEmailAndPassword(auth, email, pass);

/* //Get userName
const db = getFirestore();
const saveInfoUser = document.querySelector('.btn-username');
const moreInfoUser = document.querySelector('#moreInfo-user');
const addInfoContainer = document.querySelector('.add-info-container');
export function askMoreInfo(result) {
  /* signUpContainer.style.visibility = 'hidden';
  addInfoContainer.style.visibility = 'visible';
  if (result.providerId == "google.com" || "facebook.com" ) {
    moreInfoUser.name.value = result.user.displayName;
  }
  saveInfoUser.addEventListener('click', (e) => {
    e.preventDefault();
    onAuthStateChanged(auth, (result) => {
      const uid = result.uid;
      setDoc(doc(db, 'users', uid), {
        name: moreInfoUser.name.value,
        username: moreInfoUser.username.value,
        bio: moreInfoUser.description.value,
      })
        .then(() => {
          moreInfoUser.reset();
        });
    });
  });
} */



