import "./styles/main.css";

import { getDocs, collection, getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

window.sendInformation = function sendInformation() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  //return alert("email=" + email + " y " + " pass= " + password);

  // Registra usuarios nuevo
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return alert(errorMessage);
    });
};

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
