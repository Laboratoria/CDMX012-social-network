import {
  initializeApp, getDatabase, set, ref, update,
  getAuth, createUserWithEmailAndPassword, GoogleAuthProvider,
  signInWithPopup, TwitterAuthProvider, signInWithEmailAndPassword,
  signOut,
} from './firebase-import.js';
import { firebaseSecret } from './firebase-secret.js';

// Initialize Firebase
const app = initializeApp(firebaseSecret);
const database = getDatabase(app);

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

export const createUserWithGoogle = async () => {
  const auth = getAuth();
  let userCreateGoogle;
  const provider = new GoogleAuthProvider();
  console.log(provider);
  try {
    const result = await signInWithPopup(auth, provider);
    GoogleAuthProvider.credentialFromResult(result);
    userCreateGoogle = true;
  } catch (error) {
    GoogleAuthProvider.credentialFromError(error);
    userCreateGoogle = false;
  }
  return userCreateGoogle;
};

export const createUserWithTwitter = async () => {
  const provider2 = new TwitterAuthProvider();
  const auth = getAuth();
  let userCreateTwitter;
  try {
    const result = await signInWithPopup(auth, provider2);
    TwitterAuthProvider.credentialFromResult(result);
    userCreateTwitter = true;
  } catch (error) {
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
    const user = userCredential.user;
    const dt = new Date();
    update(ref(database, `users/${user.uid}`), {
      last_login: dt,
    });
    loginWithEmail = true;
  } catch (error) {
    loginWithEmail = false;
  }
  return loginWithEmail;
};

export const LoginUserWithGoogle = async () => {
  const auth = getAuth();
  let loginWithGoogle;
  const provider = new GoogleAuthProvider();
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(userCredential);
    const token = credential.accessToken;
    const user = userCredential.user;
    const dt = new Date();
    update(ref(database, `users/${user.uid}`), {
      last_login: dt,
    });
    loginWithGoogle = true;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    loginWithGoogle = false;
  }
  return loginWithGoogle;
};

export const loginUserWithTwitter = async () => {
  const provider2 = new TwitterAuthProvider();
  const auth = getAuth();
  let loginWithTwitter;
  try {
    const userCredential = await signInWithPopup(auth, provider2);
    const credential = TwitterAuthProvider.credentialFromResult(userCredential);
    const token = credential.accessToken;
    const secret = credential.secret;
    const user = userCredential.user;
    const dt = new Date();
    update(ref(database, `users/${user.uid}`), {
      last_login: dt,
    });
    loginWithTwitter = true;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
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
  // eslint-disable-next-line no-empty
  }
};
