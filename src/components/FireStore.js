// eslint-disable-next-line import/no-unresolved
import {
  getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

const db = getFirestore();
// try {
//     const docRef = await addDoc(collection(db, "post"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
export const saveForm = (userName, area, userMail) => {
  addDoc(collection(db, 'userData'), {
    Name: userName,
    Area: area,
    Mail: userMail,

  });
};
export const savePost = (textPost, datePost) => {
  addDoc(collection(db, 'Newposts'), {
    post: textPost,
    date: datePost,
  });
};
const querySnapshot = await getDocs(collection(db, 'Newposts'));
export const postFirebase = querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
const postString = doc.data().post;
console.log(postString);
});



