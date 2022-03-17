import { onNavigate } from "../index.js";

export const login = () => {
  const contentSectionLogin = document.createElement("section");
  contentSectionLogin.setAttribute("class", "father");

  const loginSesion = document.createElement("section");
  //   registerSection.setAttribute("class", "content")

  const imgLogo = document.createElement("img");
  imgLogo.setAttribute("src", "./Resourses/Solovino_Black.png");
  imgLogo.setAttribute("class", "solovino_logo");

  const loginFacebook = document.createElement("button");
  loginFacebook.textContent = "Inicie sesión con Facebook";
  loginFacebook.setAttribute("id", "facebook");
  loginFacebook.setAttribute("class", "button");
  loginFacebook.setAttribute("type", "button");

  const loginGoogle = document.createElement("button");
  loginGoogle.textContent = "Inicie sesión con Google";
  loginGoogle.setAttribute("id", "google");
  loginGoogle.setAttribute("class", "button");
  loginGoogle.setAttribute("type", "button");

  const inputMail = document.createElement("input");
  inputMail.setAttribute("type", "email");
  inputMail.setAttribute("id", "email");
  inputMail.setAttribute("class", "button");
  inputMail.setAttribute("placeholder", "Correo electrónico");

  const inputPasword = document.createElement("input");
  inputPasword.setAttribute("type", "pasword");
  inputPasword.setAttribute("id", "pasword");
  inputPasword.setAttribute("class", "button");
  inputPasword.setAttribute("placeholder", "Contraseña");

  const logIn = document.createElement("button");
  logIn.textContent = "Inicir sesión";
  logIn.setAttribute("onclick", "logIn()");
  logIn.setAttribute("class", "log-In");

  const text = document.createElement("h2");
  text.setAttribute("class", "new-User");
  text.textContent = "Crear una cuenta";

  const singIn = document.createElement("button");
  singIn.textContent = "Registrarse";
  singIn.addEventListener("click", () => {
    onNavigate("/register");
  });
  singIn.setAttribute("class", "sing-In");
  singIn.setAttribute("id", "sing-In");

  contentSectionLogin.appendChild(loginSesion);
  loginSesion.append(
    imgLogo,
    loginFacebook,
    loginGoogle,
    inputMail,
    inputPasword,
    logIn,
    text,
    singIn
  );
  return contentSectionLogin;
};
