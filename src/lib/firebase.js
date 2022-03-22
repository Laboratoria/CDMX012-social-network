/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

// Your web app's Firebase configuration
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_uPjnOcNCFnIvon8gHMvQKhm0h3DesHc',
  authDomain: 'meetarcade-d78e8.firebaseapp.com',
  databaseURL: 'https://meetarcade-d78e8-default-rtdb.firebaseio.com',
  projectId: 'meetarcade-d78e8',
  storageBucket: 'meetarcade-d78e8.appspot.com',
  messagingSenderId: '912563964006',
  appId: '1:912563964006:web:5466d454f38b635f25c5a7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Save registerData collection in fireStore

export const saveRegisterFormData = (username, email, password) => addDoc(collection(db, 'registerData'), { username, email, password });
