// import { AuthErrorCodes } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js'

export const errorArea = document.querySelector('.error');

export const showSignUpError = (error) => {
  if (error.code === 'auth/email-already-in-use') {
    errorArea.innerHTML = 'This e-mail address has already been registered.';
  } else if (error.code === 'auth/invalid-email') {
    errorArea.innerHTML = 'Invalid e-mail address, please try another one.';
  } else if (error.code === 'auth/weak-password') {
    errorArea.innerHTML = 'Your password must be at least 6 characters long.';
  } else {
    errorArea.innerHTML = `Error: ${error.message}`;
  }
};
