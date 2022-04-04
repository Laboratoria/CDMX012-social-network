import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
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
        const childSection = document.createElement("section");
        childSection.setAttribute("class", "post-element");

        const imgUser = document.createElement("img");
        imgUser.setAttribute("class", "user-img");
        imgUser.setAttribute(
          "src",
          post.data().photo || "https://random.imagecdn.app/300/300"
        );

        const headerPost = document.createElement("section");
        headerPost.setAttribute("class", "header-post");

        // const n = query(collection(db, "nameUser"));
        // const names = onSnapshot(n, (names) => {
        //   names.forEach((user) => {
        //     if (names.data().userName) {
        //       // doc.data() is never undefined for query doc snapshots
        //       console.log(user.id, " => ", user.data());
        //       let nikName = user.data().userName;
        //       console.log(nikName);
        //       return nikName;
        //     }
        //   });
        // });
        const nameDescription = document.createElement("h2");
        nameDescription.setAttribute("class", "name-user");
        nameDescription.textContent =
          post.data().displayName || post.data().userName;

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

        childSection.append(imgUser, headerPost, postDescription, interactions);
        headerPost.append(nameDescription, postDate);
        interactions.append(like, likeNumber, deleteComent, edit);
        sectionPost.append(childSection);
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
