import { getFirestore, doc, updateDoc } from '../firebase-imports.js';

export async function updatePost(idDoc, data) {
  console.log('En updatePost');
  const db = getFirestore();
  const postRef = doc(db, 'posts', idDoc);
  await updateDoc(postRef, data);
  // 1. Deberiamos usar un try/catch ? si al llamar la función en update-doc se ocupa un then/catch,
  // 2. En donde es correcto ponerlos, desde aquí o al invocar la función
}
