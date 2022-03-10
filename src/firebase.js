// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, getAdditionalUserInfo } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';
import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAcC9x7vCU7X9Dc0b8mM2L4RNcL97800qs',
  authDomain: 'bookreads-9192a.firebaseapp.com',
  projectId: 'bookreads-9192a',
  storageBucket: 'bookreads-9192a.appspot.com',
  messagingSenderId: '512279860959',
  appId: '1:512279860959:web:75245200f515c09571fb6a',
  measurementId: 'G-3327QVYEY6',
};

// Init firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// sign up for users
/* export const createAccount = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    askMoreInfo(userCredential);
    console.log(userCredential);
    document.getElementById('errorArea').innerHTML = '';
    document.getElementById('signUpForm').reset();
  } catch (error) {
    console.log(error);
    showSignUpError(error);
  }
}; */

export const createAccount = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);

/* // sign in with google

const googleProvider = new GoogleAuthProvider();

const btnGoogle = document.getElementById('btn-google');
btnGoogle.addEventListener('click', () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    //const credential = GoogleAuthProvider.credentialFromResult(result);
    // The signed-in user info.
    if (getAdditionalUserInfo(result).isNewUser){
      askMoreInfo(result);
    } else {
      console.log('Already register')
    }

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
});

// sign in with facebook

const facebookProvider = new FacebookAuthProvider();

const btnFacebook = document.getElementById('btn-facebook');
btnFacebook.addEventListener('click', () => {
  signInWithPopup(auth, facebookProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    //const credential = FacebookAuthProvider.credentialFromResult(result);
    // The signed-in user info.
    //const user = result.user;
    if (getAdditionalUserInfo(result).isNewUser){
      askMoreInfo(result);
    } else {
      console.log('Already register')
    }
  }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
    // ...
  });
})

//  sign in with google in welcome back page

const btnGoogle2 = document.getElementById('btn-google2');
btnGoogle2.addEventListener('click', () => { 
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
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
});

//  sign in with github

const githubProvider = new GithubAuthProvider();

const btnGithub = document.getElementById('btn-github');
btnGithub.addEventListener('click', () => {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      if (getAdditionalUserInfo(result).isNewUser){
        askMoreInfo(result);
      } else {
        console.log('Already register')
      }
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
    // ...
    });
});

//  sign in with github in welcome back page

const btnGithub2 = document.getElementById('btn-github2');
btnGithub2.addEventListener('click', () => {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
    // ...
    });
});
 */
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
