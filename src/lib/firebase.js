// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js'; // viene desde una CDN y no de lib
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

// Funcion para crear usuario con correo electronico
export const createUserRed = (email, password) => {
  const auth = getAuth(); // clave para au
  createUserWithEmailAndPassword(auth, email, password) // Crea el usuario
    .then((userCredential) => { // una vez creado con Éxito, devuelve las credenciales del usuario
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
