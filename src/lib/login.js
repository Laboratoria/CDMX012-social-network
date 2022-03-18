import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

export const login = `
<a onclick="onNavigate('/'); return
      false"><img class="arrowBack" src="img/Arrow.png"></img></a>
<div class="containerRegister">
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
      console.log('¡Login Exitoso!')
      const user = userCredential.user;
      alert('Logged in!');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

window.loginFireBase = loginFireBase;
