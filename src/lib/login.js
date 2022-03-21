import {
  getAuth,
  signInWithEmailAndPassword,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

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
    <button type="button" class="button">Inicia sesión con Gmail</button>
    <button type="button" class="button">Inicia sesión con Github</button>
  </section>
</div>
`;
function loginFireBase(e) {
  e.preventDefault();
  const loginEmail = document.getElementById('loginEmail').value;
  const loginPass = document.getElementById('loginPass').value;
  console.log(loginEmail, loginPass);

  const auth = getAuth();
  signInWithEmailAndPassword(auth, loginEmail, loginPass)
    .then((userCredential) => {
      // Signed in
      console.log('¡Login Exitoso!');
      const user = userCredential.user;
      alert('Logged in!');
      onNavigate('/feed');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        alert('Tu contraseña es incorrecta, intenta de nuevo o da click en "Olivde mi contraseña"');
      }
      if (errorCode === 'auth/invalid-email') {
        alert('Por favor ingresa un correo válido');
      }
    });
}

window.loginFireBase = loginFireBase;
