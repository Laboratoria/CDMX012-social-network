/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
import {
  getFirestore, doc, setDoc, getDoc, getAuth, onAuthStateChanged, collection, addDoc,
  query, where, onSnapshot, orderBy, serverTimestamp,
} from '../firebase-imports.js';
import { app } from './firebase-config.js';
import {
  usernameError, usernameTaken, emptyFields, validUsername, createPosts,
} from '../ui.js';
import { onNavigate } from '../app.js';

const auth = getAuth(app); // Init firebase app

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
      uid: result.uid,
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

// Current user id
let currentUserUid = '';
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    const displayName = user.displayName;
    const email = user.email;

    currentUserUid = uid;
    console.log(`${displayName} - ${email} - ${uid}`);
  } else {
    // User is signed out
    console.log('User signed out');
    onNavigate('/');
  }
});

// Saves the data from the post just created in the 'posts' collection
export async function saveNewPostData(postsForm) {
  const form = document.querySelector('#readingForm');

  try {
    const today = new Date();
    const dateToday = `${today.getDate()}/${(today.getMonth() + 1)}/${today.getFullYear()}`;

    // Creates a new doc in the posts coleccion with the new input
    await addDoc(collection(db, 'posts'), {
      uid: currentUserUid,
      reading: postsForm.bookTitle.value,
      text: postsForm.postContent.value,
      date: dateToday,
      likes: [],
      timestamp: serverTimestamp(),
    });

    form.reset();
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// Gets the original poster(OP) data and renders all the posts
function renderingPosts(post) {
  // Cleans the post area
  const postsArea = document.querySelector('#postsArea');
  postsArea.innerHTML = '';

  const profilesRef = collection(db, 'profiles'); // Gets the profile that matches the post.uid
  const q = query(profilesRef, where('uid', '==', post.uid));
  let name = '';
  let username = '';

  onSnapshot(q, (snapshot) => {
    snapshot.forEach((docu) => {
      name = docu.data().name;
      username = docu.data().username;
      createPosts(post, currentUserUid, name, username);
    });
  });
}

export function getPosts() { // Gets all the docs in the Posts collection
  const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((docu) => {
      const data = docu.data();
      data.key = docu.id;
      posts.push(data);
    });
    posts.map((post) => renderingPosts(post));
  });
}
