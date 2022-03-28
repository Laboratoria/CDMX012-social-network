import {
  getFirestore, doc, getDoc, getAuth, onAuthStateChanged,
} from '../firebase-imports.js';
import { app } from './firebase-config.js';

const auth = getAuth(app); // Init firebase app
const db = getFirestore();

let currentUid = '';
onAuthStateChanged(auth, (user) => {
  const uid = user.uid;
  currentUid = uid;
});

export async function getProfileInfo() {
  const docRef = doc(db, 'profiles', currentUid);
  const docSnap = await getDoc(docRef);
  console.log(docSnap.exists());
  if (docSnap.exists()) {
    return docSnap.data();
  }
  return null;
}
