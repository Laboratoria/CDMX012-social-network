import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
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

export const timeline = (user) => {
  const content = document.createElement("section");
  content.setAttribute("class", "content-timeline");

  const contentTimeline = document.createElement("section");
  contentTimeline.setAttribute("class", "content-all-timeline");

  const TimelineHeader = document.createElement("header");
  TimelineHeader.setAttribute("class", "timelineHeader");
  const headerLogo = document.createElement("img");
  TimelineHeader.append(headerLogo);
  headerLogo.setAttribute("class", "solovinoLogoTimeline");
  headerLogo.setAttribute(
    "src",
    "./Resourses/solovino movil_Mesa de trabajo 1.png"
  );

  const postContent = document.createElement("section");
  postContent.setAttribute("id", "postContent");
  const post = document.createElement("textarea");
  post.setAttribute("id", "post");
  post.setAttribute("class", "post");
  const buttonToPost = document.createElement("button");
  buttonToPost.textContent = "Publicar";
  buttonToPost.setAttribute("id", "toPost");
  buttonToPost.setAttribute("class", "toPost");

  postContent.append(post, buttonToPost);

  // const solovinoWorking = document.createElement("img");
  // solovinoWorking.setAttribute("class", "solovino_working_img");
  // solovinoWorking.setAttribute("src", "./Resourses/404-Solovino.png");

  // const textTimeline = document.createElement("h1");
  // textTimeline.setAttribute("class", "solovino_working");
  // textTimeline.textContent = "ERROR 404";

  const returnIndex = document.createElement("button");
  returnIndex.textContent = "Regresa al inicio";
  returnIndex.setAttribute("id", "return_index");
  returnIndex.addEventListener("click", () => onNavigate("/"));
  returnIndex.setAttribute("class", "button");
  returnIndex.setAttribute("type", "button");

  content.append(TimelineHeader, postContent, returnIndex);
  return content;
};
