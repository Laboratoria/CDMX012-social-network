/* eslint-disable import/no-unresolved */
import {
  getFirestore, doc, setDoc, getDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';
import { app } from './firebase-config.js';
import {
  usernameError, usernameTaken, emptyFields, validUsername,
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
