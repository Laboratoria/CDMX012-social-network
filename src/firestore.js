/* eslint-disable import/no-unresolved */
import {
  getFirestore, doc, setDoc, getDoc, collection, addDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';
import { app } from './firebase-config.js';
import {
  usernameError, usernameTaken, emptyFields, validUsername, createNewPost,
} from './ui.js';

// Init firebase app
const auth = getAuth(app);

const db = getFirestore();

export function saveInfo(userForm) {
  onAuthStateChanged(auth, (result) => {
    const uid = result.uid;
    setDoc(doc(db, 'usernames', userForm.username.value), {
      uid: result.uid,
    });
    setDoc(doc(db, 'profiles', uid), {
      name: userForm.name.value,
      username: userForm.username.value,
      bio: userForm.bio.value,
    })
      .then(() => {
        userForm.reset();
      });
  });
}

// Validation functions
export function isValidField(nameValue, usernameValue) {
  if (nameValue === '' || usernameValue === '') {
    emptyFields();
    return false;
  }
  return true;
}

export async function usernameValidation(username) {
  if (!/[^a-zA-Z0-9._]/g.test(username)) {
    const docRef = doc(db, 'usernames', username);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      usernameTaken();
    } else {
      validUsername();
      return true;
    }
  } else {
    usernameError();
  }
  return false;
}

// current user
let currentUserUid = '';

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    const displayName = user.displayName;
    const email = user.email;

    console.log(`${displayName} - ${email} - ${uid}`);
    currentUserUid = uid;
  } else {
    // User is signed out
    console.log('User signed out');
  }
});

// Create new post
let postId = '';

export async function saveNewPostData(postsForm) {
  const form = document.querySelector('#readingForm');

  try {
    const today = new Date();
    const dateToday = `${today.getDate()}/${(today.getMonth() + 1)}/${today.getFullYear()}`;

    // Gets the username of the current user
    const userDocRef = doc(db, 'profiles', currentUserUid);
    const userDocSnap = await getDoc(userDocRef);
    const username = userDocSnap.data().username;
    console.log(username);

    // Creates a new doc in the posts coleccion with the new input
    const docRef = await addDoc(collection(db, 'posts'), {
      user: username,
      reading: postsForm.bookTitle.value,
      text: postsForm.postContent.value,
      date: dateToday,
      likes: [],
    });
    console.log('Document written with ID: ', docRef.id);

    form.reset();

    // Gets the data from the post just created and shows it in the feed
    postId = docRef.id;
    const docSecRef = doc(db, 'posts', postId);
    const docSnap = await getDoc(docSecRef);
    const docData = docSnap.data();

    createNewPost(docData);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// Crear una función para traernos todos los documentos en la colección posts
// y renderizarnos en postsArea
