// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs
} from 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtGc_0nfBGFmRYrBknBjTnIKmoFuEsxJY",
    authDomain: "logear-426b6.firebaseapp.com",
    projectId: "logear-426b6",
    storageBucket: "logear-426b6.appspot.com",
    messagingSenderId: "658822807726",
    appId: "1:658822807726:web:3738da0f9e5658a125ad3f",
    measurementId: "G-61WQ8WLQRQ"
  };

  // init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'Books')

// get collection data
getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let books = []
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })