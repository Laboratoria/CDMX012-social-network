// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAEn7GLyIgelQsOfKdz9bsXt0VNHYiN-bs",
authDomain: "prueba1-fbaf1.firebaseapp.com",
projectId: "prueba1-fbaf1",
storageBucket: "prueba1-fbaf1.appspot.com",
messagingSenderId: "57763345832",
appId: "1:57763345832:web:bea038b2ab77f1b709199d",
measurementId: "G-YSV74XZ7CT"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);
var database = getDatabase(app);
var auth = getAuth();


document.getElementById('buttonSignup').addEventListener('click', (e) => {
    let email = document.getElementById("inputEmail").value
    let password = document.getElementById("inputPassword").value
    let username = document.getElementById("inputUsername").value
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //Send home
    // Signed in
    const user = userCredential.user;
    set(ref(database, 'users/' + user.uid),{
        username: username,
        email: email
    })
    alert('user created!')
    // ...
    document.getElementById("globalContainer").innerHTML="aquí iría el homepage"
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    alert(error.message);
    // ..
    });
    });

    //Function to create the next page

    //Sign up with google 


    const provider = new GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // Using a popup.

provider.addScope('profile');
provider.addScope('email');


    let buttonGoogle = document.getElementById('buttonGoogle')
    buttonGoogle.addEventListener('click', (e) => {

signInWithPopup(auth, provider).then((result) => {
// This gives you a Google Access Token. You can use it to access the Google API.
const credential = GoogleAuthProvider.credentialFromResult(result);
const token = credential.accessToken;
// The signed-in user info.
const user = result.user;
alert('tas logeado')
// ...
}).catch((error) => {
// Handle Errors here.
const errorCode = error.code;
const errorMessage = error.message;
// The email of the user's account used.
const email = error.email;
// The AuthCredential type that was used.
const credential = GoogleAuthProvider.credentialFromError(error);
alert(errorMessage);
// ...
})

    })
