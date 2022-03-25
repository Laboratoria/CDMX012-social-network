import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import { getFirestore,
        collection,
        addDoc,
        getDocs,
        getDoc,
        deleteDoc,
        onSnapshot,
        doc,
        updateDoc,
    } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
import { app } from './index.js';

const db = getFirestore();

export const guardarReceta = (receta, procedimiento) => {
    addDoc(collection(db, 'recetas'), { receta, procedimiento });
};
export const conseguirRecetas = () => getDocs(collection(db, 'recetas'));
export const alConseguirRecetas = (callback) => onSnapshot(collection(db, 'recetas'), callback);
export const borrarReceta = (id) => deleteDoc(doc(db, 'recetas', id));
export const conseguirReceta = (id) => getDoc(doc(db, 'recetas', id));
export const actualizarReceta = (id, nuevosCampos) => updateDoc(doc(db, 'recetas', id), nuevosCampos);
