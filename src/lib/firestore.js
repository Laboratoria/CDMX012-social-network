import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";


const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export let savePost = (post, date) =>
  addDoc(collection(db, "post"), { post, date });

//photo, personName, post,, like
// export const dataCall = (callBackFunction) => {
//   getDocs(collection(db, 'newColection')).then((snapshot) => {
//     callBackFunction(snapshot.docs);
//   });
// };

 const getPosts = () => console.log("hola");



// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815,
//   });
//   console.log("Document written with ID: ",  docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912,
//   });

//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912,
//   });

//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
