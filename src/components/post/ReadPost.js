import {
query,
collection,
onSnapshot
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";

import {db} from '../../lib/firestore.js'

const ReadPost = () => {
    const divPost = document.createElement('div');
    // aqui on snapshot
   const q = query(collection(db, "post"));
   const posts = [];
   const unsubscribe = onSnapshot(q, (postes) => {
    postes.forEach((post) => {
      posts.push(post.data().post);
    });
    divPost.textContent = posts.join(", ");
  });
    return divPost;
  };
  




export default ReadPost;