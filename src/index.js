import "./styles/main.css";

import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

alert("connected!");

const app = initializeApp({
  apiKey: "AIzaSyAwGQsOSeaKd97-2Livk2oDexObO1flAJM",
  authDomain: "solovino-d247a.firebaseapp.com",
  projectId: "solovino-d247a",
  storageBucket: "solovino-d247a.appspot.com",
  messagingSenderId: "944282026707",
  appId: "1:944282026707:web:74381d8ce6df08079e0a26",
  measurementId: "G-CCE8KLPCKW",
});

const db = getFirestore(app);

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
