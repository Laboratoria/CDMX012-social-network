import { getFirestore, doc, updateDoc } from '../firebase-imports.js';

export async function updatePost(editForm, postData) {
  const db = getFirestore();
  const postRef = doc(db, 'posts', postData.idDocument);
  console.log('postRef', postRef);
  await updateDoc(postRef, {
    reading: editForm.reading.value,
    text: editForm.txt.value,
  });
}
