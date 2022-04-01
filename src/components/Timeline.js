// import { createPost } from "../lib/firestore.js";
import { singOut } from "../lib/auth.js";
import { onNavigate } from "../main.js";
import { savePost } from "../lib/firestore.js";
import ReadPost from "./post/ReadPost.js";
// import { menu } from "./menu.js";

export const timeline = () => {
  const content = document.createElement("section");
  content.setAttribute("class", "content-timeline");

  const contentTimeline = document.createElement("section");
  contentTimeline.setAttribute("class", "content-all-timeline");

  ///// HEADER

  const TimelineHeader = document.createElement("header");
  TimelineHeader.setAttribute("class", "timeline-header");
  const headerLogo = document.createElement("img");
  headerLogo.setAttribute("class", "solovino-logo-timeline");
  headerLogo.setAttribute("src", "./Resourses/solovino movil_Mesa de trabajo 1.png");

  const menuNav = document.createElement("img"); 
  menuNav.setAttribute("class","menu-nav")
  menuNav.setAttribute("src", "../Resourses/icons/menu.png");
  
  menuNav.addEventListener("click", () => {
    onNavigate("/menu");

    // menu();
  });


  const headerSingOut = document.createElement("p");
  headerSingOut.setAttribute("type", "text");
  headerSingOut.setAttribute("class", "sing-out");
  headerSingOut.textContent = "Cerrar Sesión";
  headerSingOut.addEventListener("click", () => {
    singOut();
  });

  TimelineHeader.append(headerLogo,menuNav, headerSingOut,); ////////

  const postContent = document.createElement("section");
  postContent.setAttribute("id", "postContent");
  const post = document.createElement("textarea");
  post.setAttribute("placeholder", "Escribe algo...");
  post.setAttribute("id", "post");
  post.setAttribute("class", "post");
  post.setAttribute("placeholder", "Escribe algo...");

  const buttonToPost = document.createElement("button");
  buttonToPost.textContent = "Publicar";
  buttonToPost.setAttribute("type", "submit");
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
  getPosts.appendChild(ReadPost());

  buttonToPost.setAttribute("class", "to-post");

  postContent.append(post, buttonToPost);

  const returnIndex = document.createElement("button");
  returnIndex.textContent = "Regresa al inicio";
  returnIndex.setAttribute("id", "return_index");
  returnIndex.addEventListener("click", () => onNavigate("/"));
  returnIndex.setAttribute("class", "button");
  returnIndex.setAttribute("type", "button");

  content.appendChild(contentTimeline);
  contentTimeline.append(TimelineHeader, postContent, getPosts, returnIndex);
  return content;
};
