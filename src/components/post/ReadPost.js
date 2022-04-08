import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import { db, deletePost, editPost } from "../../lib/firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

 
const ReadPost = () => {
  
  const ContentPost = document.createElement("section");
  ContentPost.setAttribute("class", "content_post");
  // aqui on snapshot
  const data = collection(db, "post");

  const q = query(data, orderBy("date", "desc"), limit(20));
  const unsubscribe = onSnapshot(q, (postList) => {
    removeChildNodes(ContentPost);
    postList.forEach((post) => {
      if (post.data().post) {

        const PostUserData = document.createElement("section");
        PostUserData.setAttribute("class", "Post_user_data");

        const PostImgUser = document.createElement("img");
        PostImgUser.setAttribute("class", "Post_ImgUser");
        PostImgUser.setAttribute("src", post.data().photo);

        const headerPost = document.createElement("section");
        headerPost.setAttribute("class", "header_post");

        const PostDisplayName = document.createElement("h2");
        PostDisplayName.setAttribute("class", "Post_displayName");
        PostDisplayName.textContent = post.data().displayName;

        const postDate = document.createElement("p");
        postDate.textContent = getDate(post.data().date);
        postDate.setAttribute("class", "post_date");

        headerPost.append(PostDisplayName, postDate);
        PostUserData.append(PostImgUser,headerPost);

        const postText = document.createElement("h2");
        postText.setAttribute("class", "text_post");
        postText.textContent = post.data().post;

        const updateWrapper = document.createElement("section");
        updateWrapper.className = "update_wrapper";
       
        const postInteractions = document.createElement("section");
        postInteractions.className = "post_interactions";

        const like = document.createElement("img");
        like.setAttribute("class", "like");
        like.setAttribute("src", "./Resourses/icons/huella_like.png");

        const likeNumber = document.createElement("p");
        likeNumber.textContent = 40;
        likeNumber.setAttribute("class", "like_number");

        postInteractions.append(like, likeNumber);

        const updatePost = document.createElement("section");
        updatePost.setAttribute("id", "update_show_post");
        updatePost.setAttribute("class", "update_post");
        // updatePost.appendChild(updatePosteSection(post));

        const deletePost = document.createElement("img");
        deletePost.setAttribute("class", "delete_post");
        deletePost.setAttribute("src", "./Resourses/icons/delete_post.png");
        deletePost.addEventListener("click", () => {
          deleteModalSection.appendChild(BuildDeleteModal(post));
        });

        const btnEditPost = document.createElement("img", "edit-coment");
        btnEditPost.setAttribute("class", "edit_post");
        btnEditPost.setAttribute("src", "./Resourses/icons/edit_post.png");
        btnEditPost.setAttribute("data-id", post.id);
        btnEditPost.addEventListener("click", () => {
          editModalSection.appendChild(BuildEditModal(post));
        });

        updatePost.append(deletePost,btnEditPost );

        updateWrapper.append(postInteractions, updatePost);

        const deleteModalSection = document.createElement("div");
        deleteModalSection.setAttribute("id", "mcd-" + post.id);

        const editModalSection = document.createElement("div");
        editModalSection.setAttribute("id", "mc-" + post.id);

        ContentPost.append(PostUserData, postText, updateWrapper, deleteModalSection, editModalSection );
      }
    });
  });
  return ContentPost;
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

// const updatePosteSection  = (post) => {
//   const auth = getAuth();
//   const user = auth.currentUser;

//   if ( user.email == post.data().email){

//     const updatePost = document.getElementById ("update_show_post");
//     updatePost.classList.remove('update_post');
//     updatePost.classList.add('show_update_wrapper');
//   };
// };


export default ReadPost;
