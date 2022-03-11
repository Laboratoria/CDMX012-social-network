export const showSignUpError = (error) => {
  const errorArea = document.querySelector('#errorArea');

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

export const showIncorrectPass = () => {
  const pass1 = document.getElementById('txtPassword').value;
  const pass2 = document.getElementById('passwordConfirm').value;
  const errorArea = document.querySelector('#errorArea');

  if (pass1 !== pass2) {
    errorArea.innerHTML = 'Passwords do not match';
  } else if (pass1 === pass2) {
    errorArea.innerHTML = '';
  }
};

export const showPassword = (pass) => {
  const pass1 = pass;

  if (pass1.type === 'password') {
    pass1.type = 'text';
  } else {
    pass1.type = 'password';
  }
};
