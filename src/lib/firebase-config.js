/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp, getAuth, getFirestore } from './firebase-imports.js';

// Your web app's Firebase configuration
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD7f_fHQxFSiUkseJm9oNHkJ99jejC5j4M',
  authDomain: 'meetarcade2.firebaseapp.com',
  projectId: 'meetarcade2',
  storageBucket: 'meetarcade2.appspot.com',
  messagingSenderId: '977923019426',
  appId: '1:977923019426:web:6b3f0fa227515792dffdfb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
