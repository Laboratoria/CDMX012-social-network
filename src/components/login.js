/* eslint-disable import/no-cycle */
import { signIn, loginGoogle } from '../lib/firebase.js';

export const login = `
<a onclick="onNavigate('/'); return
      false"><img class="arrowBack" src="img/Arrow.png"></img></a>
<div class="containerLogin">
  <img class="logo" src="img/logoSize.png">
  <div class="containerInputR">
    <input id="loginEmail" type="text" class="register" placeholder="Ingresa tu correo" autocomplete="off"> 
    <input id="loginPass" type="password" class="register" placeholder="Ingresa tu contraseña" autocomplete="off"> 
    <button id="loginButton" class="registerButton" onclick="loginFireBase(event)">Login</button>
  </div>
  <section class="githubGoogleButtons">
    <button type="button" class="button" onclick="clickGoogle(event)">Inicia sesión con Gmail</button>
  </section>
</div>
`;
function loginFireBase(e) {
  e.preventDefault();
  const loginEmail = document.getElementById('loginEmail').value;
  const loginPass = document.getElementById('loginPass').value;
  console.log(loginEmail, loginPass);
  signIn(loginEmail, loginPass);
}
function clickGoogle(e) {
  e.preventDefault();
  loginGoogle();
}
// function clickGithub(e) {
//   e.preventDefault();
//   loginGithub();
// } - Template literal boton de github
// <button type="button" class="button" onclick="clickGithub(event)">Inicia sesión Github</button>

window.loginFireBase = loginFireBase;
window.clickGoogle = clickGoogle;
// window.clickGithub = clickGithub;
