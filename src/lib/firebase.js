/* eslint-disable prefer-template */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
import { getDatabase, set, ref, update } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_uPjnOcNCFnIvon8gHMvQKhm0h3DesHc',
  authDomain: 'meetarcade-d78e8.firebaseapp.com',
  projectId: 'meetarcade-d78e8',
  storageBucket: 'meetarcade-d78e8.appspot.com',
  messagingSenderId: '912563964006',
  appId: '1:912563964006:web:5466d454f38b635f25c5a7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase = getDatabase(app);
const auth = getAuth();
// const submit = document.getElementById("submitInfoJoin");

document.getElementById('submitInfoJoin').addEventListener('click', (e) => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const username = document.getElementById('username').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      set(ref(dataBase, 'users/' + user.uid), {
        username: username,
        email: email,
      })

      alert('user created!');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    // ..
    });
});

document.getElementById('submitInfoShoot').addEventListener('click', (e) => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      const dt = new Date();
      update(ref(dataBase, 'users/' + user.uid), {
        last_login: dt,
      })

      alert('You are In!');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
  
      alert(errorMessage);
    });
});
  