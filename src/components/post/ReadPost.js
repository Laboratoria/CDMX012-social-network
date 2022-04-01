import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import {
  onAuthStateChanged,
  getAuth,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { db } from "../../lib/firestore.js";

const ReadPost = () => {
  const sectionPost = document.createElement("section");
  // aqui on snapshot
  const data = collection(db, "post");
  const q = query(data, orderBy("date", "desc"), limit(20));
  const unsubscribe = onSnapshot(q, (postes) => {
    removeChildNodes(sectionPost);
    postes.forEach((post) => {
      if (post.data().post) {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          const uid = user.uid;
          const displayName = user.displayName;
          const email = user.email;
          const photo = user.photoURL;

          const childSection = document.createElement("section");
          childSection.setAttribute("class", "post-element");

          const imgUser = document.createElement("img");
          imgUser.setAttribute("class", "user-img");
          imgUser.setAttribute("src", "./Resourses/iconos/usuario.png");

          const nameDescription = document.createElement("h2");
          nameDescription.setAttribute("class", "name-user");
          nameDescription.textContent = displayName || email;

          const postDate = document.createElement("p");
          postDate.textContent = getDate(post.data().date);
          postDate.setAttribute("class", "date");

          const postDescription = document.createElement("h2");
          postDescription.setAttribute("class", "text-post");
          postDescription.textContent = post.data().post;

          const interactions = document.createElement("section");
          interactions.className = "interactions";

          const like = document.createElement("img", "logo-like");
          like.setAttribute("class", "like");
          like.setAttribute("src", "./Resourses/icons/huella_like.png");

          const likeNumber = document.createElement("p");
          likeNumber.textContent = 40;
          likeNumber.setAttribute("class", "like-number");

          const deleteComent = document.createElement("img", "delet-coment");
          deleteComent.setAttribute("class", "delete");
          deleteComent.setAttribute("src", "./Resourses/icons/delete_post.png");

          const edit = document.createElement("img", "edit-coment");
          edit.setAttribute("class", "edit");
          edit.setAttribute("src", "./Resourses/icons/edit_post.png");

          childSection.append(
            imgUser,
            nameDescription,
            postDate,
            postDescription,
            interactions
          );
          interactions.append(like, likeNumber, deleteComent, edit);
          sectionPost.append(childSection);
        });
      }
    });
  });
  return sectionPost;
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
