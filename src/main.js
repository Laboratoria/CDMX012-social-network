// Este es el punto de entrada de tu aplicacion

// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js'; // viene desde una CDN y no de lib
import { home } from './lib/home.js';
import { login } from './lib/login.js';
import { register } from './lib/register.js';

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

function whenRoute(pathname) {
  // inicia auth registro
  if (pathname === '/register') {
    const registerButton = document.getElementById('registerButton');
    registerButton.addEventListener('click', (e) => {
      e.preventDefault();
      const userMail = document.getElementById('mail').value;
      const userName = document.getElementById('user').value;
      const userPassword = document.getElementById('password').value;
      const userArea = document.getElementById('area').value;
      console.log(userMail, userName, userPassword, userArea);

      const auth = getAuth(); // clave para au
      createUserWithEmailAndPassword(auth, userMail, userPassword) // Crea el usuario
        .then((userCredential) => { // una vez creado, devuelve las credenciales del usuario
          const user = userCredential.user; // trae info del user (nos podria servir para despues)
          console.log(user, 'username¡Registro Exitoso!');
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        // ..
        });
    });
  }
  // empieza login
  if (pathname === '/login') {
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', (e) => {
      e.preventDefault();
      const emailLogin = document.getElementById('emailLogin').value;
      const passLogin = document.getElementById('passLogin').value;
      console.log(emailLogin, passLogin);

      const authLogin = getAuth(); // clave para au
      signInWithEmailAndPassword(authLogin, emailLogin, passLogin)
        .then((userCredential) => {
        // const user = userCredential.user;
          console.log('Si se logeo!');
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        // ..
        });
    });
  }
}

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
  whenRoute(pathname);
};
window.onNavigate = onNavigate;
window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
// se agrega whenroute para cuando actualicemos en register vuelva a tomar la funcion
whenRoute(window.location.pathname);
