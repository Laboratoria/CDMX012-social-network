/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
// viene desde una CDN y no de lib

// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

// Funcion para crear usuario con correo electronico
export const createUserRed = (email, password) => {
  const auth = getAuth(); // clave para au
  createUserWithEmailAndPassword(auth, email, password) // Crea el usuario
    .then((userCredential) => {
      // una vez creado con Éxito, devuelve las credenciales del usuario
      // const user = userCredential.user; // trae info del usuario (nos podria servir para despues)
      console.log('¡Registro Exitoso!');
      alert('registrado');
      onNavigate('/login');
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
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
};

// Funcion para iniciar sesion con correo ya registrado
export const signIn = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
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
};
// función para hacer login con google login con google
export const loginGoogle = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      onNavigate('/feed');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
// export const loginGoogle = () => {
//   const auth = getAuth();
//   const provider = new GoogleAuthProvider();
//   signInWithRedirect(auth, provider)
//   // getRedirectResult(auth)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access Google APIs.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       console.log('funciona?');
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       const email = error.email;
//       const credential = GoogleAuthProvider.credentialFromError(error);
//     });
// };

// LOGIN CON GITHUB
// export const loginGithub = () => {
//   const auth = getAuth();
//   const provider = new GithubAuthProvider();
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//       const credential = GithubAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;

//       // The signed-in user info.
//       const user = result.user;
//       // ...
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The AuthCredential type that was used.
//       const credential = GithubAuthProvider.credentialFromError(error);
//       // ...
//     });
// };
// LOG IN GOOGLE CON REDIRECT
// const auth = getAuth();
// signInWithRedirect(auth, provider);
// alert('FUNCIONA');
// getRedirectResult(auth)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     // The signed-in user info.
//     const user = result.user;
//     console.log(user);
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
