// import { onNavigate } from "../main.js";

import { registeNewUsers } from "../lib/auth.js";

export const register = () => {
  const contentSection = document.createElement("section");
  contentSection.setAttribute("class", "father_register");

  const registerSection = document.createElement("section");
  registerSection.setAttribute("class", "son_register");

  const imgLogo = document.createElement("img");
  imgLogo.setAttribute("src", "./Resourses/Solovino_Black.png");
  imgLogo.setAttribute("class", "solovino_logo_register");

  const textCreate = document.createElement("h2");
  textCreate.setAttribute("class", "new_User_register");
  textCreate.textContent = "Crear una cuenta";

  const inputMail = document.createElement("input");
  inputMail.setAttribute("type", "email");
  let emailRegister = "email_register";
  inputMail.setAttribute("id", emailRegister);
  inputMail.setAttribute("class", "button_register");
  inputMail.setAttribute("placeholder", "Correo electrónico");

  const inputPasword = document.createElement("input");
  inputPasword.setAttribute("type", "password");
  let paswordRegister = "pasword_register";
  inputPasword.setAttribute("id", paswordRegister);
  inputPasword.setAttribute("class", "button_register");
  inputPasword.setAttribute("placeholder", "Contraseña");

  const textCondicions = document.createElement("h4");
  textCondicions.setAttribute("class", "condicions_register");
  textCondicions.textContent =
    "Para completar tu registro, aceptas que has leído los términos y condiciones de uso y el tratamiento y transferencia de tus datos conforme a los dispuesto en las políticas de privacidad.";

  const logIn = document.createElement("button");
  logIn.textContent = "Continuar";
  logIn.addEventListener("click", () => {
    let userMail = document.getElementById("email_register").value;

    let userPass = document.getElementById("pasword_register").value;

    registeNewUsers(userMail, userPass);
  });

  logIn.setAttribute("class", "logIn_register");
  logIn.setAttribute("id", "create_account");

  contentSection.appendChild(registerSection);
  registerSection.append(
    imgLogo,
    textCreate,
    inputMail,
    inputPasword,
    textCondicions,
    logIn
  );

  return contentSection;
};
