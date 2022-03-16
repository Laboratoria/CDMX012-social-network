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
  const signUpButton = document.querySelector('.btn-signUp');

  if (pass1 !== pass2) {
    errorArea.innerHTML = 'Passwords do not match';
    signUpButton.disabled = true;
  } else if (pass1 === pass2) {
    errorArea.innerHTML = '';
    signUpButton.disabled = false;
  }
};

export const showPassword = (pass, eyeIcon) => {
  const pass1 = pass;
  const eyeIcon1 = eyeIcon;

  if (pass1.type === 'password') {
    pass1.type = 'text';
    eyeIcon1.innerText = 'visibility_off';
  } else {
    pass1.type = 'password';
    eyeIcon1.innerText = 'visibility';
  }
};

// username error messages add-info

export const usernameError = () => {
  const errorArea1 = document.querySelector('#errorAreaUsername');
  const errorArea2 = document.querySelector('#errorAreaForm');
  errorArea1.innerHTML = 'Invalid username';
  errorArea2.innerHTML = 'Usernames can only contain letters, numbers, . and _';
  errorArea1.style.color = 'red';
  errorArea2.style.color = 'red';
};

export const usernameTaken = () => {
  const errorArea = document.querySelector('#errorAreaUsername');
  const errorArea2 = document.querySelector('#errorAreaForm');
  errorArea.innerHTML = 'This username is already taken';
  errorArea2.innerHTML = '';
  errorArea.style.color = 'red';
};

export const validUsername = () => {
  const errorArea = document.querySelector('#errorAreaUsername');
  const errorArea2 = document.querySelector('#errorAreaForm');
  errorArea.innerHTML = 'Valid username';
  errorArea2.innerHTML = '';
  errorArea.style.color = 'green';
};

// form error message add-Info

export const emptyFields = () => {
  const errorArea = document.querySelector('#errorAreaForm');
  errorArea.innerHTML = 'Profile name and/or username cannot be empty';
  errorArea.style.color = 'red';
};
