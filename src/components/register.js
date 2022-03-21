// eslint-disable-next-line import/no-cycle
import { createUserRed } from '../lib/firebase.js';

export const register = `
<a onclick="onNavigate('/'); return
      false"><img class="arrowBack" src="img/Arrow.png"></img></a>
<div class="containerRegister">
    <img class="logo" src="img/logoSize.png">
  <section class="registerText">
    <p> Registrate con tu correo <p>
  </section>
  <div class="containerInputR">
    <input id="mail" type="text" class="register" placeholder="Correo electrónico" autocomplete="off"> 
    <input id="user" type="text" class="register" placeholder="Nombre de usuaria" autocomplete="off"> 
    <button id = "maskify" class = "maskify" onclick = "maskifyPass()"> HERE</button>
    <input id="password" type="password" class="register" placeholder="Contraseña" autocomplete="off"> 
    <input id="area" type="text" class="register" placeholder="Area tech" autocomplete="off"> 
    <button id="registerButton" class="registerButton" onclick="registerFireBase(event)">Registrarme</button>
  </div>
</div>`;

function registerFireBase(e) {
  e.preventDefault();
  const userMail = document.getElementById('mail').value;
  const userName = document.getElementById('user').value;
  const userPassword = document.getElementById('password').value;
  const userArea = document.getElementById('area').value;
  console.log(userMail, userName, userPassword, userArea);
  createUserRed(userMail, userPassword);
}

function maskifyPass() {
  const passWord = document.getElementById('password');
  if (passWord.type === 'password') {
    passWord.type = 'text';
  } else {
    passWord.type = 'password';
  }
}

window.registerFireBase = registerFireBase;
window.maskifyPass = maskifyPass;
