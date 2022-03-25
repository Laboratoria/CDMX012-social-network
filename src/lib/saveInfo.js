import {
  getFirestore, doc, setDoc, getDoc, getAuth, onAuthStateChanged,
} from '../firebase-imports.js';
import {
  usernameError, usernameTaken, emptyFields, validUsername,
} from '../ui.js';
import { app } from './firebase-config.js';

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
