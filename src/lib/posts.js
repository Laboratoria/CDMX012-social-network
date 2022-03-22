/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
import {
  getFirestore, doc, setDoc, getDoc, getAuth, onAuthStateChanged, collection,
  query, where, onSnapshot,
} from '../firebase-imports.js';
import { app } from './firebase-config.js';
import {
  usernameError, usernameTaken, emptyFields, validUsername, createNewPost, showAllPosts,
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

// Gets name and username for the current user
const name = [];
const username = [];
function userData() {
  const profilesRef = collection(db, 'profiles');
  const q = query(profilesRef, where('uid', '==', currentUserUid));

  onSnapshot(q, (snapshot) => {
    snapshot.forEach((docu) => {
      username.push(docu.data().username);
      name.push(docu.data().name);
    });
  });
}

// Create new post
export async function saveNewPostData(postsForm) {
  const form = document.querySelector('#readingForm');

  try {
    userData();
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
    };
    await setDoc(docRef, infoPost);

    form.reset();

    // Gets the data from the post just created
    const docSecRef = doc(db, 'posts', docRef.id);
    const docSnap = await getDoc(docSecRef);
    const docData = docSnap.data();

    createNewPost(docData, name, username);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// Obtains the original poster (OP) data (username and name) and prints it
let posterName = '';
let posterUsername = '';

async function getAnyUserData(post) { // Gets the doc in the Profiles collection for the OP
  const profileDocRef = doc(db, 'profiles', post.uid);
  const docSnap = await getDoc(profileDocRef);
  const docData = docSnap.data();
  posterName = docData.name;
  posterUsername = docData.username;
  // console.log(posterName, ' ', posterUsername);
  showAllPosts(post, currentUserUid, posterName, posterUsername);
}

export function getPosts() { // Gets all the docs in the Posts collection
  const q = query(collection(db, 'posts'));
  onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((docu) => {
      posts.push(docu.data());
    });
    posts.map((post) => getAnyUserData(post));
  });
}
