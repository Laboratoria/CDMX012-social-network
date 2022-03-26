import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { singOut } from "../lib/auth.js";
import { onNavigate } from "../main.js";

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     timeline();
//   } else {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   }
// });

export const timeline = () => {
  const content = document.createElement("section");
  content.setAttribute("class", "content-timeline");

  const contentTimeline = document.createElement("section");
  contentTimeline.setAttribute("class", "content-all-timeline");

  const TimelineHeader = document.createElement("header");
  TimelineHeader.setAttribute("class", "timeline-header");
  const headerLogo = document.createElement("img");
  headerLogo.setAttribute("class", "solovino-logo-timeline");
  headerLogo.setAttribute(
    "src",
    "./Resourses/solovino movil_Mesa de trabajo 1.png"
  );

  const headerSingOut = document.createElement("p");
  headerSingOut.setAttribute("type", "text");
  headerSingOut.setAttribute("class", "sing-out");
  headerSingOut.textContent = "Cerrar Sesión";
  headerSingOut.addEventListener("click", () => {
    singOut();
  });

  TimelineHeader.append(headerLogo, headerSingOut); ////////

  const postContent = document.createElement("section");
  postContent.setAttribute("id", "postContent");
  const post = document.createElement("textarea");
  post.setAttribute("placeholder", "Escribe algo...");
  post.setAttribute("id", "post");
  post.setAttribute("class", "post");
  const buttonToPost = document.createElement("button");
  buttonToPost.textContent = "Publicar";
  buttonToPost.setAttribute("id", "toPost");
  buttonToPost.setAttribute("class", "to-post");

  postContent.append(post, buttonToPost);

  // const solovinoWorking = document.createElement("img");
  // solovinoWorking.setAttribute("class", "solovino_working_img");
  // solovinoWorking.setAttribute("src", "./Resourses/404-Solovino.png");

  // const textTimeline = document.createElement("h1");
  // textTimeline.setAttribute("class", "solovino_working");
  // textTimeline.textContent = "ERROR 404";

  ///////////////Nav bar

  // const menu = document.createElement("nav");
  // menu.setAttribute("class", "nav-Bar");

  // /////ADOPCIONES

  // const adoptions = document.createElement("section");
  // adoptions.setAttribute("class", "menu-adoptions");

  // const adoptbtn = document.createElement("button");
  // adoptbtn.setAttribute("class", "adopt-btn");

  // const adoptIcon = document.createElement("img");
  // adoptIcon.setAttribute("class", "adopt-icon");
  // adoptIcon.setAttribute("src", ""); ////agregar icono

  // adoptbtn.appendChild(adoptIcon);

  // const tittleAdopt = document.createElement("div");
  // tittleMatch.setAttribute("class", "adopt-tittle");
  // const adoptTittle = document.createTextNode("Adopciones");
  // adoptTittle.setAttribute("class", "adopt-text");
  // tittleAdopt.appendChild(adoptTittle);

  // adoptions.append(adoptbtn, tittleAdopt);

  const returnIndex = document.createElement("button");
  returnIndex.textContent = "Regresa al inicio";
  returnIndex.setAttribute("id", "return_index");
  returnIndex.addEventListener("click", () => onNavigate("/"));
  returnIndex.setAttribute("class", "button");
  returnIndex.setAttribute("type", "button");

  content.appendChild(contentTimeline);
  contentTimeline.append(TimelineHeader, postContent, returnIndex);
  return content;
};
