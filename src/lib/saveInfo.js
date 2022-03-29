import {
  getFirestore, doc, setDoc, getDoc, getAuth,
} from '../firebase-imports.js';
import {
  usernameError, usernameTaken, emptyFields, validUsername,
} from '../components/ui.js';
import { app } from './firebase-config.js';

const auth = getAuth(app); // Init firebase app

const db = getFirestore();

export async function saveInfo(userForm) {
  const user = auth.currentUser;
  const userUid = user.uid;

  if (user) {
    await setDoc(doc(db, 'usernames', userForm.username.value), {
      uid: userUid,
    });
    await setDoc(doc(db, 'profiles', userUid), {
      name: userForm.name.value,
      username: userForm.username.value,
      bio: userForm.bio.value,
      uid: userUid,
    });
  } else {
    console.log('no user is signed in');
  }
  // onAuthStateChanged(auth, (result) => {
  //   const uid = result.uid;
  //   setDoc(doc(db, 'usernames', userForm.username.value), {
  //     uid: result.uid,
  //   });
  //   setDoc(doc(db, 'profiles', uid), {
  //     name: userForm.name.value,
  //     username: userForm.username.value,
  //     bio: userForm.bio.value,
  //     uid: result.uid,
  //   })
  //     .then(() => {
  //       userForm.reset();
  //     });
  // });
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
