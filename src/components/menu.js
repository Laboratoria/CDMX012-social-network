import { onNavigate } from "../main.js";
import { singOut } from "../lib/auth.js";


export const menu = () => {
  const menuContainer = document.createElement("nav");
  menuContainer.className = "menu-container";
  /////PERFIL SECTION
  const perfilSection = document.createElement("section");
  perfilSection.className = "menu-profile-section";

  /////PERFIL IMAGE
  const profileMenuPicture = document.createElement("img");
  profileMenuPicture.setAttribute("src", "../Resourses/icons/user.png");
  profileMenuPicture.className = "menu-profile-image";

  /////PERFIL NAME
  const menuName = document.createElement("div");
  menuName.textContent = "nombre usuario";
  menuName.className = "menu-name";
  ///// BTN CLOSE
  const menuClose = document.createElement("img");
  menuClose.setAttribute("src", "../Resourses/icons/flecha.png");
  menuClose.id= "menu-close";

  menuClose.addEventListener("click", () => {
    onNavigate("/Timeline");
  });

  perfilSection.append(profileMenuPicture, menuName, menuClose);

  /////////////////////////////////////////////////////////////MENU NAV
  const menuNav = document.createElement("section");
  menuNav.className = "menu-nav-section";

  ////MI PERFIL
  const menuProfile = document.createElement("section");
  menuProfile.className = "my-profile";
  menuProfile.id = "menu-icon-id";

  const iconProfile = document.createElement("img");
  iconProfile.setAttribute("src", "../Resourses/icons/user.png");
  iconProfile.className = "menu-icon";

  const myProfile = document.createElement("div");
  myProfile.textContent = "Mi Perfil";
  myProfile.className = "menu-tittle";

  menuProfile.append(iconProfile, myProfile);

  ////MIS MASCOTAS

  const menuPets = document.createElement("section");
  menuPets.className = "my-pets";
  menuPets.id = "menu-icon-id";

  const iconPets = document.createElement("img");
  iconPets.setAttribute("src", "../Resourses/icons/mypets.png");
  iconPets.className = "menu-icon";

  const myPets = document.createElement("div");
  myPets.textContent = "Mis Mascotas";
  myPets.className = "menu-tittle";

  menuPets.append(iconPets, myPets);

  ////MIS ADOPCIONES

  const menuAdopt = document.createElement("section");
  menuAdopt.className = "menu-adopt";
  menuAdopt.id = "menu-icon-id";

  menuAdopt.addEventListener("click", () => {
    onNavigate("/Adoptions");
  });



  const iconAdopt = document.createElement("img");
  iconAdopt.setAttribute("src", "../Resourses/icons/adopt.png");
  iconAdopt.className = "menu-icon";

  const tittleAdopt = document.createElement("div");
  tittleAdopt.textContent = "Adopciones";
  tittleAdopt.className = "menu-tittle";

  menuAdopt.append(iconAdopt, tittleAdopt);

  ////Adiestramiento

  const menuTraining = document.createElement("section");
  menuTraining.className = "menu-training";
  menuTraining.id = "menu-icon-id";

  const iconTraining = document.createElement("img");
  iconTraining.setAttribute("src", "../Resourses/icons/training.png");
  iconTraining.className = "menu-icon";

  const tittleTraining = document.createElement("div");
  tittleTraining.textContent = "Adiestramiento";
  tittleTraining.className = "menu-tittle";

  menuTraining.append(iconTraining, tittleTraining);

  ////MEMES

  const menuMemes = document.createElement("section");
  menuMemes.className = "menu-memes";
  menuMemes.id = "menu-icon-id";

  const iconMemes = document.createElement("img");
  iconMemes.setAttribute("src", "../Resourses/icons/meme.png");
  iconMemes.className = "menu-icon";

  const tittleMemes = document.createElement("div");
  tittleMemes.textContent = "Memes";
  tittleMemes.className = "menu-tittle";

  menuMemes.append(iconMemes, tittleMemes);

  ////PAREJA

  const menuMatch = document.createElement("section");
  menuMatch.className = "menu-match";
  menuMatch.id = "menu-icon-id";

  const iconMatch = document.createElement("img");
  iconMatch.setAttribute("src", "../Resourses/icons/match.png");
  iconMatch.className = "menu-icon";

  const tittleMatch = document.createElement("div");
  tittleMatch.textContent = "Pareja";
  tittleMatch.className = "menu-tittle";

  menuMatch.append(iconMatch, tittleMatch);

  menuNav.append(menuProfile, menuPets, menuAdopt, menuTraining, menuMemes, menuMatch);

  ////MENU SECTION
  const whiteSpace = document.createElement("div");
  whiteSpace.className = "white-space";

  //// CERRAR MENU SECTION
  const menuLogOut = document.createElement("section");
  menuLogOut.className = "menu-LogOut";
  menuLogOut.id = "menu-icon-id";

  menuLogOut.addEventListener("click", () => {
    singOut();
  });

  const iconLogOut = document.createElement("img");
  iconLogOut.setAttribute("src", "../Resourses/icons/log out.png");
  iconLogOut.className = "menu-icon";

  const tittleLogOut = document.createElement("div");
  tittleLogOut.textContent = "Cerrar Sesión";
  tittleLogOut.className = "menu-tittle";

  menuLogOut.append(iconLogOut, tittleLogOut);

  menuContainer.append(perfilSection, menuNav, menuLogOut);

  return menuContainer;
};
