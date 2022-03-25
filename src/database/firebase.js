import {
  initializeApp, getDatabase, set, ref, update,
  getAuth, createUserWithEmailAndPassword, GoogleAuthProvider,
  signInWithPopup, TwitterAuthProvider, signInWithEmailAndPassword,
} from './firebase-import.js';
import { firebaseSecret } from './firebase-secret.js';

// Initialize Firebase
const app = initializeApp(firebaseSecret);
const database = getDatabase(app);
// Auth with email

export const createUser = async (email, password, username) => {
  const auth = getAuth();
  const app = initializeApp(firebaseSecret);
  const database = getDatabase(app);
  const isUserCreated = {
    status: false,
    errorCode: '',
  };
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    set(ref(database, `users/${user.uid}`), {
      username,
      email,
    });
    isUserCreated.status = true;
  } catch (error) {
    isUserCreated.status = false;
    isUserCreated.errorCode = error.code;
  }
  return isUserCreated;
};
// Auth with email

// Sign up with google
const provider = new GoogleAuthProvider();

provider.addScope('profile');
provider.addScope('email');

export const createUserWithGoogle = async () => {
  const auth = getAuth();
  let userCreateGoogle;
  try {
    const result = await signInWithPopup(auth, provider);
    // Get Google Access Token, then we use it to access the Google API.
    GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // const user = result.user;
    userCreateGoogle = true;
  } catch (error) {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.email;
    // // The AuthCredential type that was used.
    GoogleAuthProvider.credentialFromError(error);
    userCreateGoogle = false;
  }
  return userCreateGoogle;
};

export const createUserWithTwitter = async () => {
  const provider2 = new TwitterAuthProvider();
  const auth = getAuth();
  // Auth with twitter
  let userCreateTwitter;
  try {
    const result = await signInWithPopup(auth, provider2);

    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    TwitterAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // const secret = credential.secret;

    // The signed-in user info.
    // const user = result.user;
    userCreateTwitter = true;
  } catch (error) {
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.email;
    // The AuthCredential type that was used.
    TwitterAuthProvider.credentialFromError(error);
    userCreateTwitter = false;
  }
  return userCreateTwitter;
};

export const loginUserWithEmail = async () => {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const auth = getAuth();
  let loginWithEmail;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Signed in
    const user = userCredential.user;
    const dt = new Date();
    update(ref(database, `users/${user.uid}`), {
      last_login: dt,
    });
    loginWithEmail = true;
    // ...
  } catch (error) {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    loginWithEmail = false;
  }
  return loginWithEmail;
};

export const LoginUserWithGoogle = async () => {
  const auth = getAuth();
  let loginWithGoogle;
  try {
    const userCredential = await signInWithPopup(auth, provider);
    // Get Google Access Token, then we use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(userCredential);
    const token = credential.accessToken;
    // const user = result.user;
    const user = userCredential.user;
    const dt = new Date();
    update(ref(database, `users/${user.uid}`), {
      last_login: dt,
    });
    loginWithGoogle = true;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    loginWithGoogle = false;
  }
  return loginWithGoogle;
};

export const loginUserWithTwitter = async () => {
  const provider2 = new TwitterAuthProvider();
  const auth = getAuth();
  // Auth with twitter
  let loginWithTwitter;
  try {
    const userCredential = await signInWithPopup(auth, provider2);
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const credential = TwitterAuthProvider.credentialFromResult(userCredential);
    const token = credential.accessToken;
    const secret = credential.secret;
    // The signed-in user info.
    // const user = result.user;
    const user = userCredential.user;
    const dt = new Date();
    update(ref(database, `users/${user.uid}`), {
      last_login: dt,
    });
    loginWithTwitter = true;
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    loginWithTwitter = false;
  }
  return loginWithTwitter;
};

// Logout
export const logOut = async () => {
  const auth = getAuth();
  try {
    signOut(auth);
  } catch (error) {
    console.log(error);
  }
};
