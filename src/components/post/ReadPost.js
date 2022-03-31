import {
  query,
  collection,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";

import { db } from "../../lib/firestore.js";

const ReadPost = () => {
  const divPost = document.createElement("div");
  // aqui on snapshot
  const q = query(collection(db, "post"));
  const unsubscribe = onSnapshot(q, (postes) => {
    // removeChildNodes(divPost);
    postes.forEach((post) => {
      if (post.data().post) {
        const childDiv = document.createElement("div");
        childDiv.setAttribute("class", "post-element");
        const postDescription = document.createElement("h2");
        const postDate = document.createElement("p");
        postDescription.textContent = post.data().post;
        postDate.textContent = getDate(post.data().date);
        childDiv.append(postDescription, postDate);
        divPost.appendChild(childDiv);
      }
    });
  });
  return divPost;
};

function getDate(date) {
  return new Date(
    date.seconds * 1000 + date.nanoseconds / 1000000
  ).toDateString();
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export default ReadPost;
