import {
  initializeApp,
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getAuth,
} from "./firebase-imports.js";
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
      likes: [],
    });
  } else {
    // No user is signed in.
  }
};

//const doUser = db.collection("user").doc(user.uid);

export const deletePost = (id) => {
  //alert("Este post será eliminado");
  deleteDoc(doc(db, "post", id));
};

export async function editPost(id, editImput, date) {
  const postRef = doc(db, "post", id);
  await updateDoc(postRef, {
    post: editImput,
    date: new Date(),
  });
}

export async function likePost(post) {
  const auth = getAuth();
  const user = auth.currentUser;

  const likes = post.data().likes;
  const doILikeIt = likes.find((like) => like.email === user.email);

  if (doILikeIt) {
    // Lo quito
    const postRef = doc(db, "post", post.id);
    console.log(auth.currentUser);
    await updateDoc(postRef, {
      likes: arrayRemove({ email: user.email }),
    });
  } else {
    const postRef = doc(db, "post", post.id);
    console.log(auth.currentUser);
    await updateDoc(postRef, {
      likes: arrayUnion({ email: user.email }),
    });
  }
}
