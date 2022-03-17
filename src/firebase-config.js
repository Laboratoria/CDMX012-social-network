// eslint-disable-next-line import/no-unresolved
import { initializeApp } from './firebase-imports';

const firebaseConfig = {
  apiKey: 'AIzaSyAcC9x7vCU7X9Dc0b8mM2L4RNcL97800qs',
  authDomain: 'bookreads-9192a.firebaseapp.com',
  projectId: 'bookreads-9192a',
  storageBucket: 'bookreads-9192a.appspot.com',
  messagingSenderId: '512279860959',
  appId: '1:512279860959:web:75245200f515c09571fb6a',
  measurementId: 'G-3327QVYEY6',
};

export const app = initializeApp(firebaseConfig);
