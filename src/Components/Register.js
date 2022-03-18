import { getDocs, collection, getFirestore } from "firebase/firestore/lite";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { onNavigate } from "../index.js";

export const register = () => {
  const contentSection = document.createElement("section");
  contentSection.setAttribute("class", "father_register");

  const registerSection = document.createElement("section");
  registerSection.setAttribute("class", "son_register");

  const imgLogo = document.createElement("img");
  imgLogo.setAttribute("src", "./Resourses/Solovino_Black.png");
  imgLogo.setAttribute("class", "solovino_logo_register");

  const textCreate = document.createElement("h2");
  textCreate.setAttribute("class", "new_User_register");
  textCreate.textContent = "Crear una cuenta";

  const inputMail = document.createElement("input");
  inputMail.setAttribute("type", "email");
  let emailRegister = "email_register";
  inputMail.setAttribute("id", emailRegister);
  inputMail.setAttribute("class", "button_register");
  inputMail.setAttribute("placeholder", "Correo electrónico");

  const inputPasword = document.createElement("input");
  inputPasword.setAttribute("type", "password");
  let paswordRegister = "pasword_register";
  inputPasword.setAttribute("id", paswordRegister);
  inputPasword.setAttribute("class", "button_register");
  inputPasword.setAttribute("placeholder", "Contraseña");

  const textCondicions = document.createElement("h4");
  textCondicions.setAttribute("class", "condicions_register");
  textCondicions.textContent =
    "Para completar tu registro, aceptas que has leído los <b>términos y condiciones de uso</b> y el tratamiento y transferencia de tus datos conforme a los dispuesto en las políticas de privacidad.";

  const logIn = document.createElement("button");
  logIn.textContent = "Crear cuenta e iniciar sesión";
  logIn.addEventListener("click", () =>
    saveDataOnFirebase(emailRegister, paswordRegister)
  );
  logIn.setAttribute("class", "logIn_register");
  logIn.setAttribute("id", "create_account");

  contentSection.appendChild(registerSection);
  registerSection.append(
    imgLogo,
    textCreate,
    inputMail,
    inputPasword,
    textCondicions,
    logIn
  );

  // function saveDataOnFirebase() {
  //   let emailModal = document.getElementById("email_register").value;
  //   let passwordModal = document.getElementById("password_register").value;
  //   //return alert("email=" + email + " y " + " pass= " + password);

  //   // Registra usuarios nuevo
  // if(){
  // const auth = getAuth();
  // createUserWithEmailAndPassword(auth, emailModal, passwordModal)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     alert(errorMessage);
  //   })}

  return contentSection;
};

function saveDataOnFirebase(email, pasword) {
  let emailRegister = document.getElementById(email).value;
  let passwordRegister = document.getElementById(pasword).value;

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, emailRegister, passwordRegister)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // alert(errorMessage || errorCode);
      // ..
    });
  if (emailRegister == false || passwordRegister == false) {
    alert("Introduce tus datos");
  } else {
    onNavigate("/timeline");
  }

  // }
  // if (!email || !pasword) {
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, emailRegister, passwordRegister)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       alert(errorMessage || errorCode);
  //       // ..
  //     });
  //}
}
