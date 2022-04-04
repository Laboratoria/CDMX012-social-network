import { onNavigate } from "../main.js";

import { registeNewUsers } from "../lib/auth.js";
import { saveUserData } from "../lib/firestore.js";

export const register = () => {
  const contentSectionRegister = document.createElement("section");
  contentSectionRegister.setAttribute("class", "background_Content");

  ////////DATA SECTION
  const registerSection = document.createElement("section");
  registerSection.setAttribute("class", "account_section");

  ////////////////// logoy anuncio

  const registerClose = document.createElement("img");
  registerClose.setAttribute("src", "../Resourses/icons/flecha.png");
  registerClose.setAttribute("class", "register_close");
  registerClose.addEventListener("click", () => {
    onNavigate("/");
  });



  const imgLogo = document.createElement("img");
  imgLogo.setAttribute("src", "./Resourses/Solovino_Black.png");
  imgLogo.setAttribute("class", "solovino_logo_logIn");

  const textCreate = document.createElement("h2");
  textCreate.setAttribute("class", "text_create_register");
  textCreate.textContent = "Crear una cuenta";

  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  let nameUser = "name-user";
  inputName.setAttribute("id", nameUser);
  inputName.setAttribute("class", "button_register");
  inputName.setAttribute("placeholder", "Nombre completo del Usuario");

  const inputMail = document.createElement("input");
  inputMail.setAttribute("type", "email");
  let emailRegister = "email_register";
  inputMail.setAttribute("id", emailRegister);
  inputMail.setAttribute("class", "button_register");
  inputMail.setAttribute("placeholder", "Correo electrónico");

  const inputPasword = document.createElement("input");
  inputPasword.setAttribute("type", "password");
  inputPasword.setAttribute("id", "pasword_register");
  inputPasword.setAttribute("class", "input_account");
  inputPasword.setAttribute("placeholder", "Contraseña");

  const textCondicions = document.createElement("h4");
  textCondicions.setAttribute("class", "condicions_register");
  textCondicions.textContent =
    "Completa tu registro, al hacer click en el botón " +
    "continuar" +
    " aceptas que has leído los términos y condiciones de uso y el tratamiento y transferencia de tus datos conforme a los dispuesto en las políticas de privacidad.";

  const buttonRegister = document.createElement("button");
  buttonRegister.setAttribute("id", "create_account");
  buttonRegister.setAttribute("class", "button_account");
  buttonRegister.textContent = "Registrarse";
  buttonRegister.addEventListener("click", () => {
    let userMail = document.getElementById("email_register").value;
    let userPass = document.getElementById("pasword_register").value;

    registeNewUsers(userMail, userPass);
  });
  logIn.addEventListener("click", () => {
    let userName = document.getElementById("name-user").value;
    saveUserData(userName);
    console.log(userName);
  });

  const footerPage = document.createElement("footer");

  footerPage.textContent = "Derechos Reservados 2022 ©️";


  registerSection.append(registerClose,
    imgLogo,
    textCreate,
    inputName,
    inputMail,
    inputPasword,
    textCondicions,
    logIn
  );

  contentSectionRegister.append(registerSection, );

  return contentSectionRegister;
};
