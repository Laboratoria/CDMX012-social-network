import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export let savePost = (post, date) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
    const uid = user.uid;
    const displayName = user.displayName;
    const email = user.email;
    const photo = user.photoURL;

    return addDoc(collection(db, "post"), {
      post,
      date,
      uid,
      displayName,
      email,
      photo,
    });
  } else {
    // No user is signed in.
  }
};

// const doUser = db.collection('user').doc(user.uid);

// updateProfile(auth.currentUser, {
//   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(() => {
//   // Profile updated!
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });

export const deletePost = (id) => {
  alert("Este post será eliminado");
  deleteDoc(doc(db, "post", id));
};

export async function editPost(id, editImput, date) {
  const postRef = doc(db, "post", id);
  await updateDoc(postRef, {
    post: editImput,
    date: new Date(),
  });
}
