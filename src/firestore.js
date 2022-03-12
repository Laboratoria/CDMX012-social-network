import { app } from './firebase-config.js';
import {getFirestore, doc, setDoc, getDoc} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js';
import { getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';

// Init firebase app
const auth = getAuth(app);

const db = getFirestore();

export function saveInfo (userForm){
      onAuthStateChanged(auth, (result) => {
        const uid = result.uid;
        setDoc(doc(db, 'users', uid), {
          name: userForm.name.value,
          username: userForm.username.value,
          bio: userForm.bio.value,
        })
        .then(() => {
          userForm.reset()
        })
      })
  }
  
// Funciones para validar

export function isValidField ( value, field ){
  
    if (value === ''){
      console.log(`${field} cannot be empty`)
      return false
    }
    return true
}
    

export async function usernameValidation (username) {

    if (!/[^a-zA-Z0-9._]/g.test(username)){
        const docRef = doc(db, "usernames", username);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log('This username is already taken')
        }else{
            console.log('New username')
            return true  
        }
      }else{
        console.log('Usernames can only contain letters, numbers, . and _')
      }
    return false
}
