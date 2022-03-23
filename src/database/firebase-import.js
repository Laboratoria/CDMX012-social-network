export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
export {
  getDatabase, set, ref, update,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js';
export {
  getAuth, createUserWithEmailAndPassword, GoogleAuthProvider,
  signInWithPopup, TwitterAuthProvider, signInWithEmailAndPassword,signInWithRedirect,
  getRedirectResult, signOut, onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
export {
  getFirestore, collection, addDoc, getDocs,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

// export {
//   initializeApp, getDatabase, set, ref, update, getAuth, createUserWithEmailAndPassword,
//   GoogleAuthProvider, signInWithPopup, TwitterAuthProvider, signInWithEmailAndPassword,
//   getFirestore, collection, addDoc, getDocs,
// };
