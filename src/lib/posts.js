/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
import {
  getFirestore, doc, setDoc, getAuth, onAuthStateChanged, collection,
  query, where, onSnapshot, orderBy, serverTimestamp,
} from '../firebase-imports.js';
import { app } from './firebase-config.js';
import { createPosts } from '../components/renderingPosts.js';
import { onNavigate } from '../app.js';

const auth = getAuth(app); // Init firebase app

const db = getFirestore();

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
    const docRef = doc(collection(db, 'posts'));
    const infoPost = {
      idDocument: docRef.id, // add document id
      uid: currentUserUid,
      reading: postsForm.bookTitle.value,
      text: postsForm.postContent.value,
      date: dateToday,
      likes: [],
      timestamp: serverTimestamp(),
    };

    await setDoc(docRef, infoPost);

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
