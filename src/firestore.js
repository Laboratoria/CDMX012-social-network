import {getFirestore, doc, setDoc} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js';

const db = getFirestore();
const saveInfoUser = document.querySelector('.btn-username');
const moreInfoUser = document.querySelector('#moreInfo-user');
const addInfoContainer = document.querySelector('.add-info-container');

function askMoreInfo (result){
    saveInfoUser.addEventListener('click', (e) => {
      e.preventDefault();
      onAuthStateChanged(auth, (result) => {
        const uid = result.uid;
        setDoc(doc(db, 'users', uid), {
          name: moreInfoUser.name.value,
          username: moreInfoUser.username.value,
          bio: moreInfoUser.description.value,
        })
        .then(() => {
          moreInfoUser.reset()
        })
      })
    });
  }
  