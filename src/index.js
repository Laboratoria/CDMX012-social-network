import "./styles/main.css";

import { getDocs, collection, getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwGQsOSeaKd97-2Livk2oDexObO1flAJM",
  authDomain: "solovino-d247a.firebaseapp.com",
  projectId: "solovino-d247a",
  storageBucket: "solovino-d247a.appspot.com",
  messagingSenderId: "944282026707",
  appId: "1:944282026707:web:74381d8ce6df08079e0a26",
  measurementId: "G-CCE8KLPCKW",
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    document.getElementById("login").innerHTML = "LOGUEADO" + user.email;
    // ...
  } else {
    document.getElementById("login").innerHTML = "NO LOGUEADO";
    // User is signed out
    // ...
  }
});

/*let db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}*/

window.sendInformationModal = function sendInformationModal() {
  let emailModal = document.getElementById("email-modal").value;
  let passwordModal = document.getElementById("password-modal").value;
  //return alert("email=" + email + " y " + " pass= " + password);

  // Registra usuarios nuevo
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, emailModal, passwordModal)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

// window.sendInformation = sendInformation(){

// }

var btnClose = document.getElementById("btn-close-modal");
var modalAccount = document.getElementById("logIn-modal");

window.closeModal = function closeModal() {
  console.log("test");
};

// btnClose.onclick = function() {
//   console.log("sfcdsdf");
//   modalCreateAccount.style.display = "none";
// }

/*
try {
  const response = await addDoc(collection(db, "post"), {
    body: "Miren mi perrito, esta bonito",
    date: new Date(),
    postedBy: "Denisse Molina",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
*/
