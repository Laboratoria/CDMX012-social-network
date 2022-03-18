/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
import {
  getFirestore, doc, setDoc, getDoc, getAuth, onAuthStateChanged, collection, addDoc, getDocs,
} from './firebase-imports.js';
import { app } from './firebase-config.js';
import {
  usernameError, usernameTaken, emptyFields, validUsername, createNewPost, showAllPosts,
} from './ui.js';
import { onNavigate } from './app.js';

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

// Current user data
let currentUserUid = '';

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    const displayName = user.displayName;
    const email = user.email;

    console.log(`${displayName} - ${email} - ${uid}`);
    currentUserUid = uid;
  } else {
    // User is signed out
    console.log('User signed out');
    onNavigate('/');
  }
});

// Create new post
export async function saveNewPostData(postsForm) {
  const form = document.querySelector('#readingForm');

  try {
    const today = new Date();
    const dateToday = `${today.getDate()}/${(today.getMonth() + 1)}/${today.getFullYear()}`;

    // Gets the username of the current user
    const userDocRef = doc(db, 'profiles', currentUserUid);
    const userDocSnap = await getDoc(userDocRef);
    const username = userDocSnap.data().username;
    const profileName = userDocSnap.data().name;

    // Creates a new doc in the posts coleccion with the new input
    const docRef = await addDoc(collection(db, 'posts'), {
      name: profileName,
      user: username,
      reading: postsForm.bookTitle.value,
      text: postsForm.postContent.value,
      date: dateToday,
      likes: [],
    });

    form.reset();

    // Gets the data from the post just created and shows it on the feed
    const docSecRef = doc(db, 'posts', docRef.id);
    const docSnap = await getDoc(docSecRef);
    const docData = docSnap.data();

    createNewPost(docData);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// Trae todos los documentos en la colección posts y renderizarnos en postsArea
export async function getPosts() {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  querySnapshot.forEach((docu) => {
    showAllPosts(docu.data());
  });
}
