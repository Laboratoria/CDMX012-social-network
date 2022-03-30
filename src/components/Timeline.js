// import { createPost } from "../lib/firestore.js";
import { singOut } from "../lib/auth.js";
import { onNavigate } from "../main.js";
import { savePost } from "../lib/firestore.js";
import ReadPost from "./post/ReadPost.js";

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
  const getPosts = document.createElement("div");
  getPosts.appendChild(ReadPost());

  buttonToPost.setAttribute("class", "to-post");

  postContent.append(post, buttonToPost);

//   ///////////////Nav bar

//   const menu = document.createElement("nav");
//   menu.setAttribute("class", "nav-Bar");

//   /////ADOPCIONES

//   const adoptions =  document.createElement("div");
//   adoptions.setAttribute("class", "menu-adoptions");

//   const adoptbtn = document.createElement("button");
//   adoptbtn.setAttribute("class", "adopt-btn");

//   const adoptIcon = document.createElement("img"); 
//   adoptIcon.setAttribute("class", "adopt-icon");
//   adoptIcon.setAttribute("src",""); ////agregar icono
//   adoptbtn.appendChild(adoptIcon);

//   const tittleAdopt= document.createElement("div");
//   tittleMatch.setAttribute("class", "adopt-tittle");
//   const adoptTittle = document.createTextNode("Adopciones");
//   adoptTittle.setAttribute("class", "adopt-text");
//   tittleAdopt.appendChild(adoptTittle);

//   adoptions.append(adoptbtn,tittleAdopt);


//   ///// PAREJA

//   const match =  document.createElement("div");
//   match.setAttribute("class", "menu-match");

//   const matchbtn = document.createElement("button");
//   matchbtn.setAttribute("class", "match-btn");

//   const matchIcon = document.createElement("img"); 
//   matchIcon.setAttribute("class", "match-icon");
//   matchIcon.setAttribute("src",""); ////agregar icono
//   matchbtn.appendChild(matchIcon);

//   const tittleMatch= document.createElement("div");
//   tittleMatch.setAttribute("class", "match-tittle");
//   const matchTittle = document.createTextNode("Pareja");
//   matchTittle.setAttribute("class", "match-text");
//   tittleMatch.appendChild(matchTittle);

//   match.append(matchbtn,tittleMatch);

//   ///// MEMES

//   const memes =  document.createElement("div");
//   memes.setAttribute("class", "menu-memes");

//   const memesbtn = document.createElement("button");
//   memesbtn.setAttribute("class", "memes-btn");

//   const memesIcon = document.createElement("img"); 
//   memesIcon.setAttribute("class", "memes-icon");
//   memesIcon.setAttribute("src",""); ////agregar icono
//   memesbtn.appendChild(memesIcon);

//   const tittleMemes= document.createElement("div");
//   tittleMemes.setAttribute("class", "memes-tittle");
//   const memesTittle = document.createTextNode("Memes");
//   memesTittle.setAttribute("class", "memes-text");
//   tittleMatch.appendChild(memesTittle);

//   memes.append(memesbtn,tittleMemes);

// ///// ADIESTRAMIENTO

// const training =  document.createElement("div");
// training.setAttribute("class", "menu-training");

// const trainingbtn = document.createElement("button");
// trainingbtn.setAttribute("class", "training-btn");

// const trainingIcon = document.createElement("img"); 
// trainingIcon.setAttribute("class", "training-icon");
// trainingIcon.setAttribute("src",""); ////agregar icono
// trainingbtn.appendChild(trainingIcon);

// const tittleTraining= document.createElement("div");
// tittleTraining.setAttribute("class", "training-tittle");
// const trainingTittle = document.createTextNode("Adiestramiento");
// trainingTittle.setAttribute("class", "training-text");
// tittleTraining.appendChild(trainingTittle);

// training.append(trainingbtn,tittleTraining);

// menu.append(adoptions,match,memes,training);


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
  contentTimeline.append(TimelineHeader, postContent, getPosts, returnIndex);
  return content;
};
