// eslint-disable-next-line import/no-unresolved
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

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

export const saveForm = (name, area) => {
  addDoc(collection(db, 'posts'), {
    nombre: name,
    Area: area,
  });
};
