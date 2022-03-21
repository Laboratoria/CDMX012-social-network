// eslint-disable-next-line import/no-cycle
import { signIn, loginGoogle } from '../lib/firebase.js';

export const login = `
<a onclick="onNavigate('/'); return
      false"><img class="arrowBack" src="img/Arrow.png"></img></a>
<div class="containerLogin">
  <img class="logo" src="img/logoSize.png">
  <div class="containerInputR">
    <input id="loginEmail" type="text" class="register" placeholder="Ingresa tu correo" autocomplete="off"> 
    <input id="loginPass" type="password" class="register" placeholder="Ingresa tu contraseña" autocomplete="off"> 
    <button id = "maskify" class = "maskify" onclick = "maskifyPassLogin()"> HERE</button>
    <button id="loginButton" class="registerButton" onclick="loginFireBase(event)">Login</button>
  </div>
  <section class="githubGoogleButtons">
    <button type="button" class="button" onclick="clickGoogle(event)">Inicia sesión con Gmail</button>
    <button type="button" class="button">Inicia sesión con Github</button>
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
function maskifyPassLogin() {
  const passWord = document.getElementById('loginPass');
  if (passWord.type === 'password') {
    passWord.type = 'text';
  } else {
    passWord.type = 'password';
  }
}
window.loginFireBase = loginFireBase;
window.clickGoogle = clickGoogle;
window.maskifyPassLogin = maskifyPassLogin;
