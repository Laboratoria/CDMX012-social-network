/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp,
  getAuth,
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from './firebase-imports.js';

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
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
