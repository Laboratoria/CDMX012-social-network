// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js'; // viene desde una CDN y no de lib
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

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

  const auth = getAuth(); // clave para au
  createUserWithEmailAndPassword(auth, userMail, userPassword) // Crea el usuario
    .then((userCredential) => { // una vez creado con Éxito, devuelve las credenciales del usuario
      const user = userCredential.user; // trae info del usuario (nos podria servir para despues)
      console.log('¡Registro Exitoso!');
      alert('registrado');
      onNavigate('/login');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/invalid-email') {
        alert('Por favor ingresa un correo válido');
      }
      if (errorCode === 'auth/weak-password') {
        alert('Tu contraseña debe contener al menos 6 carácteres.');
      }
      if (errorCode === 'auth/email-already-in-use') {
        alert('Ya existe una cuenta con este correo, intenta con uno nuevo o Inicia Sesión');
      }
    });
}

window.registerFireBase = registerFireBase;
