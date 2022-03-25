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

  ///// HEADER

  const TimelineHeader = document.createElement("header");
  TimelineHeader.setAttribute("class", "timelineHeader");
  const headerLogo = document.createElement("img");
  TimelineHeader.append(headerLogo);
  headerLogo.setAttribute("class", "solovinoLogoTimeline");
  headerLogo.setAttribute(
    "src",
    "./Resourses/solovino movil_Mesa de trabajo 1.png"
  );

  /////AGREGAR POST

  const postContent = document.createElement("section");
  postContent.setAttribute("id", "postContent");
  const post = document.createElement("textarea");
  post.setAttribute("id", "post");
  post.setAttribute("class", "post");
  post.setAttribute("placeholder", "Escribe algo...");

  const buttonToPost = document.createElement("button");
  buttonToPost.textContent = "Publicar";
  buttonToPost.setAttribute("id", "toPost");
  buttonToPost.setAttribute("class", "toPost");
  
  postContent.append(post, buttonToPost);

  ///////////////Nav bar

  const menu = document.createElement("nav");
  menu.setAttribute("class", "nav-Bar");

  /////ADOPCIONES

  const adoptions =  document.createElement("div");
  adoptions.setAttribute("class", "menu-adoptions");

  const adoptbtn = document.createElement("button");
  adoptbtn.setAttribute("class", "adopt-btn");

  const adoptIcon = document.createElement("img"); 
  adoptIcon.setAttribute("class", "adopt-icon");
  adoptIcon.setAttribute("src",""); ////agregar icono
  adoptbtn.appendChild(adoptIcon);

  const tittleAdopt= document.createElement("div");
  tittleMatch.setAttribute("class", "adopt-tittle");
  const adoptTittle = document.createTextNode("Adopciones");
  adoptTittle.setAttribute("class", "adopt-text");
  tittleAdopt.appendChild(adoptTittle);

  adoptions.append(adoptbtn,tittleAdopt);


  ///// PAREJA

  const match =  document.createElement("div");
  match.setAttribute("class", "menu-match");

  const matchbtn = document.createElement("button");
  matchbtn.setAttribute("class", "match-btn");

  const matchIcon = document.createElement("img"); 
  matchIcon.setAttribute("class", "match-icon");
  matchIcon.setAttribute("src",""); ////agregar icono
  matchbtn.appendChild(matchIcon);

  const tittleMatch= document.createElement("div");
  tittleMatch.setAttribute("class", "match-tittle");
  const matchTittle = document.createTextNode("Pareja");
  matchTittle.setAttribute("class", "match-text");
  tittleMatch.appendChild(matchTittle);

  match.append(matchbtn,tittleMatch);

  ///// MEMES

  const memes =  document.createElement("div");
  memes.setAttribute("class", "menu-memes");

  const memesbtn = document.createElement("button");
  memesbtn.setAttribute("class", "memes-btn");

  const memesIcon = document.createElement("img"); 
  memesIcon.setAttribute("class", "memes-icon");
  memesIcon.setAttribute("src",""); ////agregar icono
  memesbtn.appendChild(memesIcon);

  const tittleMemes= document.createElement("div");
  tittleMemes.setAttribute("class", "memes-tittle");
  const memesTittle = document.createTextNode("Memes");
  memesTittle.setAttribute("class", "memes-text");
  tittleMatch.appendChild(memesTittle);

  memes.append(memesbtn,tittleMemes);

///// ADIESTRAMIENTO

const training =  document.createElement("div");
training.setAttribute("class", "menu-training");

const trainingbtn = document.createElement("button");
trainingbtn.setAttribute("class", "training-btn");

const trainingIcon = document.createElement("img"); 
trainingIcon.setAttribute("class", "training-icon");
trainingIcon.setAttribute("src",""); ////agregar icono
trainingbtn.appendChild(trainingIcon);

const tittleTraining= document.createElement("div");
tittleTraining.setAttribute("class", "training-tittle");
const trainingTittle = document.createTextNode("Adiestramiento");
trainingTittle.setAttribute("class", "training-text");
tittleTraining.appendChild(trainingTittle);

training.append(trainingbtn,tittleTraining);

menu.append(adoptions,match,memes,training);


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


  ////fOOTER

  const footerContent = document.createElement("section");
  footerContent.setAttribute("id", "footer-content");
  
/////home
  const homebtn = document.createElement("button");
  homebtn.setAttribute("class", "home-btn");

  const homeIcon = document.createElement("img"); 
  homeIcon.setAttribute("class", "training-icon");
  homeIcon.setAttribute("src",""); ////agregar icono
  homebtn.append(homeIcon);

  /////post footer
  const postFooterbtn = document.createElement("button");
  postFooterbtn.setAttribute("class", "postFooter-btn");

  const postFooterIcon = document.createElement("img"); 
  postFooterIcon.setAttribute("class", "footer-icon");
  postFooterIcon.setAttribute("src",""); ////agregar icono
  postFooterbtn.append(postFooterIcon);

/////guardados
const savebtn = document.createElement("button");
savebtn.setAttribute("class", "save-btn");

const saveIcon = document.createElement("img"); 
saveIcon.setAttribute("class", "save-icon");
saveIcon.setAttribute("src",""); ////agregar icono
savebtn.append(saveIcon);

/////perfil usuario
const profilebtn = document.createElement("button");
profilebtn.setAttribute("class", "profile-btn");

const profileIcon = document.createElement("img"); 
profileIcon.setAttribute("class", "profile-icon");
profileIcon.setAttribute("src",""); ////agregar icono
profilebtn.append(profileIcon);


  footerContent.appendChild(homeIcon,postFooterbtn,savebtn,profilebtn);







  content.append(TimelineHeader, postContent, menu, returnIndex,footerContent);

  return content;
};
