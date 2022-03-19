export const login = () => {
  const divLogin = document.createElement('div');
  divLogin.setAttribute('id', 'divLogin');
  const header = document.createElement('header');
  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('src', './img/logosmall.png');
  const divLogo = document.createElement('div');
  divLogo.innerText = 'Mukí';
  const pLogo = document.createElement('p');
  pLogo.innerText = 'A safe network for women';
  divLogo.setAttribute('id', 'divLogo');
  const buttonGoogle = document.createElement('button');
  buttonGoogle.innerText = 'Sign up with Google';
  buttonGoogle.setAttribute('id', 'buttonGoogle');
  const imgGoogle = document.createElement('img');
  imgGoogle.setAttribute('src', './img/google-logo.png');
  imgGoogle.setAttribute('id', 'imgGoogle');
  buttonGoogle.appendChild(imgGoogle);
  const buttonTwitter = document.createElement('button');
  buttonTwitter.innerText = 'Sign up with Twitter';
  buttonTwitter.setAttribute('id', 'buttonTwitter');
  const imgTwitter = document.createElement('img');
  imgTwitter.setAttribute('src', './img/logo.png');
  imgTwitter.setAttribute('id', 'imgTwitter');
  buttonTwitter.appendChild(imgTwitter);

  const separation = document.createElement('div');
  separation.setAttribute('id', 'separation');
  const line = document.createElement('div');
  line.setAttribute('class', 'line');
  const or = document.createElement('p');
  or.innerText = 'Or';
  const line2 = document.createElement('div');
  line2.setAttribute('class', 'line');

  separation.appendChild(line);
  separation.appendChild(or);
  separation.appendChild(line2);

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'text');
  inputEmail.setAttribute('placeholder', 'Email');
  inputEmail.setAttribute('id', 'inputEmail');
  inputEmail.setAttribute('class', 'input');

  const span = document.createElement('span');
  span.setAttribute('class', 'eye');
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'Password');
  inputPassword.setAttribute('id', 'inputPassword');
  inputPassword.setAttribute('class', 'input');
  span.appendChild(inputPassword);
  const imgEye = document.createElement('i');
  imgEye.setAttribute('id', 'imgEye');
  imgEye.setAttribute('class', 'fa-solid fa-eye');
  imgEye.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
    } else {
      inputPassword.type = 'password';
    }
  });
  span.appendChild(imgEye);

  const inputUsername = document.createElement('input');
  inputUsername.setAttribute('type', 'text');
  inputUsername.setAttribute('placeholder', 'Username');
  inputUsername.setAttribute('id', 'inputUsername');
  inputUsername.setAttribute('class', 'input');
  const buttonSignup = document.createElement('button');
  buttonSignup.setAttribute('id', 'buttonSignup');
  buttonSignup.innerText = 'Continue';
  const errorMessage = document.createElement('div');
  errorMessage.setAttribute('id', 'errorMessage');
  const divAccount = document.createElement('div');
  divAccount.innerText = 'Already have an account?';
  divAccount.setAttribute('id', 'divAccount');

  span.addEventListener('focus', () => span.classList.add('focused'), true);
  span.addEventListener('blur', () => span.classList.remove('focused'), true);

  header.appendChild(divLogo);
  header.appendChild(imgLogo);
  divLogo.appendChild(pLogo);

  divLogin.appendChild(header);
  divLogin.appendChild(buttonGoogle);
  divLogin.appendChild(buttonTwitter);
  divLogin.appendChild(separation);
  divLogin.appendChild(inputEmail);
  divLogin.appendChild(span);
  divLogin.appendChild(inputUsername);
  divLogin.appendChild(errorMessage);

  divLogin.appendChild(buttonSignup);
  divLogin.appendChild(divAccount);
  return divLogin;
};
