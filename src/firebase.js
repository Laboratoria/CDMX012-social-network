// Import the functions from the SDKs
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import { getDatabase, set, ref } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js';
import {
  getAuth, createUserWithEmailAndPassword, GoogleAuthProvider,
  signInWithPopup, TwitterAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAEn7GLyIgelQsOfKdz9bsXt0VNHYiN-bs',
  authDomain: 'prueba1-fbaf1.firebaseapp.com',
  projectId: 'prueba1-fbaf1',
  storageBucket: 'prueba1-fbaf1.appspot.com',
  messagingSenderId: '57763345832',
  appId: '1:57763345832:web:bea038b2ab77f1b709199d',
  measurementId: 'G-YSV74XZ7CT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
export const createUser = (email, password, username) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      set(ref(database, `users/${user.uid}`), {
        username,
        email,
      });
      alert('user created!');
    })
    .catch(() => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      return alert("no se puede");

    });
};

// Auth with email

// Sign up with google
// const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
// provider.addScope('profile');
// provider.addScope('email');

// const buttonGoogle = document.getElementById('buttonGoogle');
// buttonGoogle.addEventListener('click', () => {
//   signInWithPopup(auth, provider).then((result) => {
//     // Get Google Access Token, then we use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     const user = result.user;
//     alert('User created');
//   }).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     alert(errorMessage);
//   });
// });

// const provider2 = new TwitterAuthProvider();

// // Auth with twitter
// const buttonTwitter = document.getElementById('buttonTwitter');
// buttonTwitter.addEventListener('click', () => {
//   signInWithPopup(auth, provider2)
//     .then((result) => {
//     // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
//     // You can use these server side with your app's credentials to access the Twitter API.
//       const credential = TwitterAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       const secret = credential.secret;
//       alert('User created');
//       // The signed-in user info.
//       const user = result.user;
//     }).catch((error) => {
//     // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The AuthCredential type that was used.
//       const credential = TwitterAuthProvider.credentialFromError(error);
//     });
// });
