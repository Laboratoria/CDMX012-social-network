// Este es el punto de entrada de tu aplicacion

import { home } from './lib/home.js';
import { login } from './lib/login.js';
import { register } from './lib/register.js';
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js"; //viene desde una CDN y no de lib

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
  // whenRoute(pathname);
};
window.onNavigate = onNavigate;
window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

// function whenRoute(pathname){
//   if(pathname == "/register"){
//     const registerButton = document.getElementById('registerButton');
//     registerButton.addEventListener('click', (e) => {
//       e.preventDefault();
//       const userMail = document.getElementById('mail').value;
//       const userName = document.getElementById('user').value;
//       const userPassword = document.getElementById('password').value;
//       const userArea = document.getElementById('area').value;
//       console.log(userMail, userName, userPassword, userArea);

//       const auth = getAuth(); //clave para au
//       createUserWithEmailAndPassword(auth, userMail, userPassword) // Crea el usuario
//         .then((userCredential) => { //una vez creado con Éxito, devuelve las credenciales del usuario
//           const user = userCredential.user; //trae info del usuario (nos podria servir para despues)
//           console.log('¡Registro Exitoso!')
//         })
        // .catch((error) => {
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        //   // ..
        // });
  //   });
  // }
// }
// window.location.pathname; //se agrega whenroute para cuando actualicemos en register vuelva a tomar la funcion