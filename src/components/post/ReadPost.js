import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import { db, deletePost, editPost, likePost } from "../../lib/firestore.js";

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
        imgUser.setAttribute("src", post.data().photo);

        const headerPost = document.createElement("section");
        headerPost.setAttribute("class", "header-post");

        const nameDescription = document.createElement("h2");
        nameDescription.setAttribute("class", "name-user");
        nameDescription.textContent = post.data().displayName;

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
        like.setAttribute("src", "./Resourses/icons/like.png");
        like.addEventListener("click", () => {
          likePost(post);
        });

        const likeNumber = document.createElement("p");
        likeNumber.textContent = post.data().likes.length;
        likeNumber.setAttribute("class", "like-number");

        const deleteComent = document.createElement("img", "delet-coment");
        deleteComent.setAttribute("class", "delete");
        deleteComent.setAttribute("src", "./Resourses/icons/delete_post.png");

        let deleteModalSection = document.createElement("div");
        deleteModalSection.setAttribute("id", "mcd-" + post.id);

        deleteComent.addEventListener("click", () => {
          deleteModalSection.appendChild(BuildDeleteModal(post));
        });

        const btnEditPost = document.createElement("img", "edit-coment");
        btnEditPost.setAttribute("class", "edit");
        btnEditPost.setAttribute("src", "./Resourses/icons/edit_post.png");
        btnEditPost.setAttribute("data-id", post.id);

        let editModalSection = document.createElement("div");
        editModalSection.setAttribute("id", "mc-" + post.id);

        btnEditPost.addEventListener("click", () => {
          editModalSection.appendChild(BuildEditModal(post));
        });

        childSection.append(imgUser, headerPost, postDescription, interactions);
        headerPost.append(nameDescription, postDate);
        interactions.append(like, likeNumber, deleteComent, btnEditPost);
        sectionPost.append(childSection, editModalSection, deleteModalSection);
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
////////////////////////////////MODAL EDIT POST

const BuildEditModal = (post) => {
  let postId = post.id;
  let postContent = post.data().post;

  const editModalContainer = document.createElement("div");
  editModalContainer.setAttribute("class", "modal_edit_background");

  editModalContainer.setAttribute("id", postId);

  const editModal = document.createElement("div");
  editModal.setAttribute("class", "modal_edit_container");

  const editModalClose = document.createElement("img");
  editModalClose.setAttribute("src", "../Resourses/icons/close.png");
  editModalClose.setAttribute("class", "modal_close");
  editModalClose.addEventListener("click", () => {
    let editModalContainer = document.getElementById(postId);
    let modalContainer = document.getElementById("mc-" + postId);
    modalContainer.removeChild(editModalContainer);
  });

  const prfileImageEdit = document.createElement("img");
  prfileImageEdit.setAttribute("class", "profile_user_edit");
  prfileImageEdit.setAttribute(
    "src",
    post.data().photo || "https://random.imagecdn.app/300/300"
  );

  const editImput = document.createElement("input");
  editImput.setAttribute("type", "text");
  editImput.setAttribute("id", "input_editPost");
  editImput.setAttribute("class", "input_edit_Post");
  editImput.value = postContent;

  const btnSaveChanges = document.createElement("button");
  btnSaveChanges.setAttribute("class", "btn_saveChanges");
  btnSaveChanges.textContent = "Guardar cambios";
  btnSaveChanges.addEventListener("click", () => {
    editPost(postId, editImput.value, post.data().date);
  });

  editModal.append(editModalClose, prfileImageEdit, editImput, btnSaveChanges);
  editModalContainer.append(editModal);

  return editModalContainer;
};

////////////////////////////////MODAL DELETE POST
const BuildDeleteModal = (post) => {
  let postId = post.id;
  let postContent = post.data().post;

  const deleteModalContainer = document.createElement("section");
  deleteModalContainer.setAttribute("class", "modal_edit_background");

  deleteModalContainer.setAttribute("id", postId);

  const editModal = document.createElement("section");
  editModal.setAttribute("class", "modal_edit_container");

  const editModalClose = document.createElement("img");
  editModalClose.setAttribute("src", "../Resourses/icons/close.png");
  editModalClose.setAttribute("class", "modal_close");
  editModalClose.addEventListener("click", () => {
    let deleteModalContainer = document.getElementById(postId);
    let modalContainer = document.getElementById("mcd-" + postId);
    modalContainer.removeChild(deleteModalContainer);
  });

  const prfileImageEdit = document.createElement("img");
  prfileImageEdit.setAttribute("class", "profile_user_edit");
  prfileImageEdit.setAttribute(
    "src",
    post.data().photo || "https://random.imagecdn.app/300/300"
  );

  const editImput = document.createElement("h1");
  editImput.setAttribute("type", "text");
  editImput.setAttribute("id", "input_editPost");
  editImput.setAttribute("class", "input_edit_Post");
  editImput.textContent = "Este post será eliminado";

  // const btnSaveChanges = document.createElement("button");
  // btnSaveChanges.setAttribute("class", "btn_saveChanges");
  // btnSaveChanges.textContent = "Cancelar";
  // btnSaveChanges.addEventListener("click", () => {
  //   editPost(postId, editImput.value, post.data().date);
  // });
  const btnDelete = document.createElement("button");
  btnDelete.setAttribute("class", "btn_saveChanges");
  btnDelete.textContent = "Confirmar";
  btnDelete.setAttribute("data-id", post.id);
  btnDelete.addEventListener("click", ({ target: { dataset } }) => {
    console.log("se borra el post");
    deletePost(dataset.id);
  });

  editModal.append(editModalClose, prfileImageEdit, editImput, btnDelete);
  deleteModalContainer.appendChild(editModal);

  return deleteModalContainer;
};

export default ReadPost;
