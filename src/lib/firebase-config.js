import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";

export const firebaseConfig = {
  apiKey: "AIzaSyDj6jmIpNX5TMlIb0byHuxe6DgFWSZOC-4",
  authDomain: "respaldo-solovino.firebaseapp.com",
  projectId: "respaldo-solovino",
  storageBucket: "respaldo-solovino.appspot.com",
  messagingSenderId: "812043284969",
  appId: "1:812043284969:web:e5702c72fd947c62529b78",
  databaseURL:"gs://respaldo-solovino.appspot.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// const storage = getStorage(firebaseApp);
