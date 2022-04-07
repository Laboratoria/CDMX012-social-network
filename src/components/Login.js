import { onNavigate } from "../main.js";
import { isLogin, loginWithGoogle, loginWithFacebook } from "../lib/auth.js";

export const login = () => {
  const contentSectionLogin = document.createElement("aside");
  contentSectionLogin.setAttribute("class", "background_Content");

  ////////DATA SECTION

  const loginSection = document.createElement("section");
  loginSection.setAttribute("class", "account_section");

  ////////////////// logoy slogan

  const imgLogo = document.createElement("img");
  imgLogo.setAttribute("src", "../Resourses/Logos/Solovino_Black.png");
  imgLogo.setAttribute("class", "solovino_logo_logIn");

  const sloganText = document.createElement("div");
  sloganText.setAttribute("class", "slogan_text");
  sloganText.textContent = "El amor no se busca, solo llega...";

  ////////////////// inputs inicio sesion

  const logInInputSection = document.createElement("section");
  logInInputSection.setAttribute("class", "input_section");

  const inputMail = document.createElement("input");
  inputMail.setAttribute("type", "email");
  inputMail.setAttribute("id", "email");
  inputMail.setAttribute("class", "input_account");
  inputMail.setAttribute("placeholder", "Correo electrónico");

  const inputPasword = document.createElement("input");
  inputPasword.setAttribute("type", "password");
  inputPasword.setAttribute("id", "pasword");
  inputPasword.setAttribute("class", "input_account");
  inputPasword.setAttribute("placeholder", "Contraseña");

  const buttonlogIn = document.createElement("button");
  buttonlogIn.setAttribute("class", "button_account");
  buttonlogIn.setAttribute("id", "button_log_In_id");
  buttonlogIn.textContent = "Iniciar sesión";
  buttonlogIn.addEventListener("click", () => {
    let userMail = document.getElementById("email").value;
    let userPass = document.getElementById("pasword").value;

    isLogin(userMail, userPass);
  });

  logInInputSection.append(inputMail, inputPasword, buttonlogIn);

  //////iconos redes sociales
  const loginIconContent = document.createElement("section");
  loginIconContent.setAttribute("class", "login_icon_content");

  const loginFacebook = document.createElement("img");
  loginFacebook.setAttribute("src", "../Resourses/icons/Facebook.png");
  loginFacebook.setAttribute("class", "log_in_icon");
  loginFacebook.setAttribute("click", () => {
    loginWithFacebook();
  });

  const loginTwitter = document.createElement("img");
  loginTwitter.setAttribute("src", "../Resourses/icons/Twitter.png");
  loginTwitter.setAttribute("class", "log_in_icon");

  const loginGoogle = document.createElement("img");
  loginGoogle.setAttribute("src", "../Resourses/icons/google.png");
  loginGoogle.setAttribute("class", "log_in_icon");
  loginGoogle.addEventListener("click", () => {
    loginWithGoogle();
  });

  loginIconContent.append(loginFacebook, loginTwitter, loginGoogle);

  ////////////////////registro

  const logInRegisterSection = document.createElement("section");
  logInRegisterSection.setAttribute("class", "login_register_section");

  const newAccountText = document.createElement("h2");
  newAccountText.setAttribute("class", "account_text");
  newAccountText.setAttribute("id", "account_text_id");
  newAccountText.textContent = "¿No tienes una cuenta? ";

  const buttonNewRegister = document.createElement("button");
  buttonNewRegister.setAttribute("id", "sing_In");
  buttonNewRegister.setAttribute("class", "button_account");
  buttonNewRegister.textContent = "Registrarse";
  buttonNewRegister.addEventListener("click", () => {
    onNavigate("/Register");
  });
  logInRegisterSection.append(newAccountText, buttonNewRegister);

  //////fotter
  const footerPage = document.createElement("div");
  footerPage.setAttribute("class", "footer_login");
  footerPage.textContent = "Derechos Reservados 2022 ©️";

  loginSection.append(
    sloganText,
    imgLogo,
    logInInputSection,
    loginIconContent,
    logInRegisterSection,
    footerPage
  );

  contentSectionLogin.appendChild(loginSection);

  return contentSectionLogin;
};
