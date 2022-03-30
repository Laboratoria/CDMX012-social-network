import { onNavigate } from "../main.js";
import { isLogin, loginWithGoogle } from "../lib/auth.js";

export const login = () => {
  const contentSectionLogin = document.createElement("section");
  contentSectionLogin.setAttribute("class", "father");

  const loginSesion = document.createElement("section");
  loginSesion.setAttribute("class", "son");

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
  loginGoogle.addEventListener("click", () => {
    loginWithGoogle();
  });
  loginGoogle.setAttribute("id", "google");
  loginGoogle.setAttribute("class", "button");
  loginGoogle.setAttribute("type", "button");

  const inputMail = document.createElement("input");
  inputMail.setAttribute("type", "email");
  inputMail.setAttribute("id", "email");
  inputMail.setAttribute("class", "button");
  inputMail.setAttribute("placeholder", "Correo electrónico");

  const inputPasword = document.createElement("input");
  inputPasword.setAttribute("type", "password");
  inputPasword.setAttribute("id", "pasword");
  inputPasword.setAttribute("class", "button");
  inputPasword.setAttribute("placeholder", "Contraseña");

  const logIn = document.createElement("button");
  logIn.textContent = "Iniciar sesión";
  logIn.addEventListener("click", () => {
    let userMail = document.getElementById("email").value;

    let userPass = document.getElementById("pasword").value;

    isLogin(userMail, userPass);
  });
  // logIn.addEventListener("click", () => {
  //   authenticationObserver();
  // });
  logIn.setAttribute("class", "log-In");

  const text = document.createElement("h2");
  text.setAttribute("class", "new-User");
  text.textContent = "¿No tienes una cuenta? ";

  const singIn = document.createElement("button");
  singIn.textContent = "Registrarse";
  singIn.addEventListener("click", () => {
    onNavigate("/Register");
  });
  singIn.setAttribute("class", "sing-In");
  singIn.setAttribute("id", "sing-In");

  const footerPage = document.createElement("footer");
  footerPage.setAttribute("class", "footer-login-register");
  footerPage.textContent = "Derechos Reservados 2022 ©️";

  contentSectionLogin.appendChild(loginSesion);
  loginSesion.append(
    imgLogo,
    loginFacebook,
    loginGoogle,
    inputMail,
    inputPasword,
    logIn,
    text,
    singIn,
    footerPage
  );
  return contentSectionLogin;
};