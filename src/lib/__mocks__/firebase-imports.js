//en este archivo se va a replicar la interfaz de exportacion del archivo original
//estas son funciones de firebase/firestore y todas devuelven una promesa
//este archivo no hace "nada" unicamente replica los archivos del export original pero son mocks que aun no hacen nada.

export const getAuth = () => Promise.resolve({});
export const createUserWithEmailAndPassword = () => Promise.resolve({});
export const signInWithEmailAndPassword = () => Promise.resolve({});
export const signOut = () => Promise.resolve({});
export const signInWithPopup = () => Promise.resolve({});
export class GoogleAuthProvider {} //es una clase
export const updateProfile = () => Promise.resolve({});
export const FacebookAuthProvider = () => Promise.resolve({});
export const onAuthStateChanged = () => Promise.resolve({});

export const getFirestore = () => Promise.resolve({});
export const collection = () => Promise.resolve({});
export const addDoc = () => Promise.resolve({});
export const setDoc = () => Promise.resolve({});
export const doc = () => Promise.resolve({});
export const eleteDoc = () => Promise.resolve({});
export const updateDoc = () => Promise.resolve({});
export const arrayUnion = () => Promise.resolve({});
export const arrayRemove = () => Promise.resolve({});

export const query = () => Promise.resolve({});
export const orderBy = () => Promise.resolve({});
export const onSnapshot = () => Promise.resolve({});
export const limit = () => Promise.resolve({});

export const initializeApp = () => Promise.resolve({});
