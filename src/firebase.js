// Import the functions you need from the SDKs you need
import { app } from './firebase-config.js';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, onAuthStateChanged, getAdditionalUserInfo } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';
//import {getFirestore, doc, setDoc} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js';
//import { errorArea, showSignUpError } from './ui.js';

// Init firebase app
const auth = getAuth(app);

// Sign up with email and password
export const createAccount = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);


// // sign up for users
// const signUpForm = document.querySelector('#signUpForm');
// const txtEmail = document.getElementById('txtEmail');
// const txtUsername = document.getElementById('txtUsername');
// const txtPassword = document.getElementById('txtPassword');

// const createAccount = async () => {
//   const email = txtEmail.value;
//   const username = txtUsername.value;
//   const password = txtPassword.value;

//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, username, password);
//     askMoreInfo(userCredential);
//     errorArea.innerHTML = '';
//     signUpForm.reset();
//   } catch (error) {
//     console.log(error);
//     showSignUpError(error);
//   }
// };

// sign in with google

const googleProvider = new GoogleAuthProvider();

export const signUpGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
    if (getAdditionalUserInfo(result).isNewUser){
      askMoreInfo(result);
    } else { 
      console.log('Already registered');
    }
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorMessage);
    });
};


// sign in with facebook

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

//  sign in with google in welcome back page


// const btnGoogle2 = document.getElementById('btn-google2');
// btnGoogle2.addEventListener('click', () => { 
//   signInWithPopup(auth, googleProvider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       // The signed-in user info.
//       const user = result.user;
//       console.log(user);
//     // ...
//     }).catch((error) => {
//     // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//     });
// });

// //  sign in with github

// const githubProvider = new GithubAuthProvider();

// const btnGithub = document.getElementById('btn-github');
// btnGithub.addEventListener('click', () => {
//   signInWithPopup(auth, githubProvider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GithubAuthProvider.credentialFromResult(result);
//       // The signed-in user info.
//       const user = result.user;
//       console.log(user);
//       if (getAdditionalUserInfo(result).isNewUser){
//         askMoreInfo(result);
//       } else {
//         console.log('Already register')
//       }
//     // ...
//     }).catch((error) => {
//     // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The AuthCredential type that was used.
//       const credential = GithubAuthProvider.credentialFromError(error);
//     // ...
//     });
// });

// //  sign in with github in welcome back page

// const btnGithub2 = document.getElementById('btn-github2');
// btnGithub2.addEventListener('click', () => {
//   signInWithPopup(auth, githubProvider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GithubAuthProvider.credentialFromResult(result);
//       // The signed-in user info.
//       const user = result.user;
//       console.log(user);
//     // ...
//     }).catch((error) => {
//     // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The AuthCredential type that was used.
//       const credential = GithubAuthProvider.credentialFromError(error);
//     // ...
//     });
// });

// //Get userName
// const db = getFirestore();
// const saveInfoUser = document.querySelector('.btn-username');
// const moreInfoUser = document.querySelector('#moreInfo-user');
// const addInfoContainer = document.querySelector('.add-info-container');

// function askMoreInfo (result){
//   signUpContainer.style.visibility = 'hidden';
//   addInfoContainer.style.visibility = 'visible';

//   if (result.providerId == "google.com" || "facebook.com" ){
//     moreInfoUser.name.value = result.user.displayName
//   }

//   saveInfoUser.addEventListener('click', (e) => {
//     e.preventDefault();
//     onAuthStateChanged(auth, (result) => {
//       const uid = result.uid;
//       setDoc(doc(db, 'users', uid), {
//         name: moreInfoUser.name.value,
//         username: moreInfoUser.username.value,
//         bio: moreInfoUser.description.value,
//       })
//       .then(() => {
//         moreInfoUser.reset()
//       })
//     })
//   });
// }
