// import { createPost } from "../lib/firestore.js";
// import { singOut } from "../lib/auth.js";
import { onNavigate } from "../main.js";
import { savePost } from "../lib/firestore.js";
import ReadPost from "./post/ReadPost.js";
// import { menu } from "./menu.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";


export const timeline = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  
 
  const content = document.createElement("section");
  content.setAttribute("class", "content-timeline");

  const contentTimeline = document.createElement("section");
  contentTimeline.setAttribute("class", "content-all-timeline");

  ///// HEADER

  const TimelineHeader = document.createElement("header");
  TimelineHeader.setAttribute("class", "timeline-header");

  const headerLogo = document.createElement("img");
  headerLogo.setAttribute("class", "solovino-logo-timeline");
  headerLogo.setAttribute("src", "../Resourses/Logos/solovino black movil.png");

  const menuNav = document.createElement("img"); 
  menuNav.setAttribute("class","menu-nav")
  menuNav.setAttribute("src", "../Resourses/icons/menu.png");
  
  menuNav.addEventListener("click", () => {
    onNavigate("/menu");

    // menu();
  });

  TimelineHeader.append(headerLogo,menuNav,); ////////

  const postContent = document.createElement("section");
  postContent.setAttribute("id", "postContent");

  const PostedImgUser = document.createElement("img");
  PostedImgUser.setAttribute("class", "Post_ImgUser");
  PostedImgUser.setAttribute("src", user.photoURL);



  const post = document.createElement("textarea");
  post.setAttribute("placeholder", "Escribe algo...");
  post.setAttribute("id", "post");
  post.setAttribute("class", "post");
  post.setAttribute("placeholder", "Escribe algo...");

  const buttonToPost = document.createElement("button");
  buttonToPost.textContent = "Publicar";
  buttonToPost.setAttribute("id", "toPost");
  buttonToPost.addEventListener("click", () => {
    //   createPost();
    const contentPost = document.getElementById("post").value;
    const date = new Date();
    savePost(contentPost, date);
  });

  buttonToPost.addEventListener("click", () => {
    function limpiar() {
      document.getElementById("post").value = "";
    }
    limpiar();
  });


  const getPosts = document.createElement("div");
  getPosts.setAttribute("id", "posts_container");
  getPosts.appendChild(ReadPost());
 

  buttonToPost.setAttribute("class", "to-post");

  postContent.append(PostedImgUser, post, buttonToPost);

  // const returnIndex = document.createElement("button");
  // returnIndex.textContent = "Regresa al inicio";
  // returnIndex.setAttribute("id", "return_index");
  // returnIndex.addEventListener("click", () => onNavigate("/"));
  // returnIndex.setAttribute("class", "button");
  // returnIndex.setAttribute("type", "button");

  content.appendChild(contentTimeline);
  contentTimeline.append(TimelineHeader, postContent, getPosts, );
  return content;
};
