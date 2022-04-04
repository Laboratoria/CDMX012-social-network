// Your web app's Firebase configuration
// import {
//   getDatabase,
//   set,
//   ref,
//   update,
// } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
//"https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"
import { app } from "./firebase-config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { onNavigate } from "../main.js";
import { firebaseConfig } from "./firebase-config.js";

export const auth = getAuth(app);

export function registeNewUsers(emailRegister, paswordRegister) {
  // let usuarioVerificado = {};

  createUserWithEmailAndPassword(auth, emailRegister, paswordRegister)
    .then((userCredential) => {
      onNavigate("/Timeline");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode || errorMessage);
    });
}

export const isLogin = (emailLogin, passwordLogin) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (user) {
        console.log(user);
        onNavigate("/Timeline");
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode || errorMessage);
    });
};

//iniciar sesión con Google

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      clearImmediate;
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log(user);
      onNavigate("/Timeline");
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
      alert(errorCode || errorMessage || email || credential);
    });
};

export const singOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      onNavigate("/");
    })
    .catch((error) => {
      // An error happened.
      alert("Error al intentar cerrar sesión");
    });
};
