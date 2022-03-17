import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js"; //viene desde una CDN y no de lib

export const register = `
<a onclick="onNavigate('/'); return
      false"><img class="arrowBack" src="img/Arrow.png"></img></a>
<div class="containerRegister">
    <img class="logo" src="img/logoSize.png">
  <section class="githubGoogleButtons">
    <button type="button" class="button">Inicia sesión con Gmail</button>
    <button type="button" class="button">Inicia sesión con Github</button>
  </section>
  <section class="registerText">
    <p> Registrate con tu correo <p>
  </section>
  <div class="containerInputR">
    <input id="mail" type="text" class="register" placeholder="Ingresa tu correo" autocomplete="off"> 
    <input id="user" type="text" class="register" placeholder="Ingresa tu nombre de usuaria" autocomplete="off"> 
    <input id="password" type="text" class="register" placeholder="Ingresa tu contraseña" autocomplete="off"> 
    <input id="area" type="text" class="register" placeholder="Ingresa tu area tech" autocomplete="off"> 
    <button id="registerButton" class="registerButton" onclick="registerFireBase(event)">Registrarme</button>
  </div>
</div>`;

function registerFireBase(e){
    e.preventDefault(); 
    const userMail = document.getElementById('mail').value;
    const userName = document.getElementById('user').value;
    const userPassword = document.getElementById('password').value;
    const userArea = document.getElementById('area').value;
    console.log(userMail, userName, userPassword, userArea);

    const auth = getAuth(); //clave para au
    createUserWithEmailAndPassword(auth, userMail, userPassword) // Crea el usuario
      .then((userCredential) => { //una vez creado con Éxito, devuelve las credenciales del usuario
        const user = userCredential.user; //trae info del usuario (nos podria servir para despues)
        console.log('¡Registro Exitoso!');
        alert ("registrado");
        onNavigate('/login');
    });
}

window.registerFireBase=registerFireBase;