import { onNavigate } from "../main.js";

import { registeNewUsers } from "../lib/auth.js";

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

  ////////////////// inputs registro

  const RegisterInputSection = document.createElement("section");
  RegisterInputSection.setAttribute("class", "input_section");

  const inputMailRegister = document.createElement("input");
  inputMailRegister.setAttribute("type", "email");
  inputMailRegister.setAttribute("id", "email_register");
  inputMailRegister.setAttribute("class", "input_account");
  inputMailRegister.setAttribute("placeholder", "Correo electrónico");

  const inputPasword = document.createElement("input");
  inputPasword.setAttribute("type", "password");
  inputPasword.setAttribute("id", "pasword_register");
  inputPasword.setAttribute("class", "input_account");
  inputPasword.setAttribute("placeholder", "Contraseña");

  RegisterInputSection.append(inputMailRegister, inputPasword);



  const RegisterNewAccount = document.createElement("section");
  RegisterNewAccount.setAttribute("class", "new_account");

  const textConditions = document.createElement("h4");
  textConditions.setAttribute("class", "condicions_register");
  textConditions.textContent =
    "Para completar tu registro, aceptas que has leído los términos y condiciones de uso y el tratamiento y transferencia de tus datos conforme a los dispuesto en las políticas de privacidad.";

  const buttonRegister = document.createElement("button");
  buttonRegister.setAttribute("id", "create_account");
  buttonRegister.setAttribute("class", "button_account");
  buttonRegister.textContent = "Registrarse";
  buttonRegister.addEventListener("click", () => {
    let userMail = document.getElementById("email_register").value;
    let userPass = document.getElementById("pasword_register").value;

    registeNewUsers(userMail, userPass);
  });

  RegisterNewAccount.append(textConditions,buttonRegister );


  registerSection.append(registerClose,
    imgLogo,
    textCreate,
    RegisterInputSection,
    RegisterNewAccount
  );

  contentSectionRegister.append(registerSection, );

  return contentSectionRegister;
};
