import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';
import { auth, signInAccount } from '../firebase.js';

export const signInPage = () => {
  const lpContainer = document.createElement('div');
  lpContainer.setAttribute('class', 'landing-page-container');

  // header section
  const header = document.createElement('header');
  header.setAttribute('class', 'logo-header');

  const logo = document.createElement('img');
  logo.setAttribute('class', 'logo-book');
  logo.setAttribute('src', './assets/logo sin fondo 1.png');
  logo.setAttribute('alt', 'logo book reads');

  const bookreads = document.createElement('img');
  bookreads.setAttribute('class', 'titleBookReads');
  bookreads.setAttribute('src', './assets/nombre_sin_fondo-removebg-preview 1.png');
  bookreads.setAttribute('alt', 'titleBookReads');

  const slogan = document.createElement('h1');
  slogan.innerHTML = 'Read with me';
  slogan.setAttribute('class', 'sloganSN');

  // guardar componentes de header
  header.append(logo, bookreads, slogan);

  // seccion enter account
  const enterAccContainer = document.createElement('div');
  enterAccContainer.setAttribute('class', 'enterAccount-container');

  const enterAccTitle = document.createElement('h2');
  enterAccTitle.setAttribute('class', 'welcome-title');
  enterAccTitle.innerHTML = 'Welcome back';

  const signInForm = document.createElement('form');
  signInForm.setAttribute('class', 'enterAccount-form');
  signInForm.setAttribute('id', 'signInForm');

  const emailFormat = document.createElement('div');
  emailFormat.innerHTML = `<label for="email" class="e-mail">E-mail</label><img class="mail" src='./assets/icons8-email-64 1.png' alt="mail"/>`;

  const txtEmail = document.createElement('input');
  txtEmail.setAttribute('class', 'e-mail');
  txtEmail.setAttribute('type', 'email');
  txtEmail.setAttribute('placeholder', 'e-mail@example.com');
  txtEmail.required = 'true';
  txtEmail.id = 'txtEmail';

  const passwordFormat = document.createElement('div');
  passwordFormat.innerHTML = `<label for="password" class="password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters">Password</label><img class="padlock" src='./assets/icons8-contraseña-24 1.png' alt="padlock" />`;

  const txtPassword = document.createElement('input');
  txtPassword.setAttribute('class', 'password');
  txtPassword.setAttribute('type', 'password');
  txtPassword.setAttribute('placeholder', 'Insert your password here');
  txtPassword.required = 'true';
  txtPassword.id = 'txtPassword';

  const errorMessage = document.createElement('p');
  errorMessage.setAttribute('class', 'error-message');

  // guardar componentes de signInForm
  signInForm.append(emailFormat, txtEmail, passwordFormat, txtPassword, errorMessage);

  // btn de signIn Welcome
  const btnSignInWelcome = document.createElement('input');
  btnSignInWelcome.setAttribute('type', 'button');
  btnSignInWelcome.setAttribute('class', 'btn-signInWelcome');
  btnSignInWelcome.setAttribute('id', 'btn-signInWelcome');
  btnSignInWelcome.setAttribute('value', 'Sign In');

  // contenido de providers google facebook y github
  const providersContent = document.createElement('span');
  providersContent.setAttribute('class', 'otherProviders');
  providersContent.innerHTML = `<label for="" class="otherProviders">or sign in with</label>`;

  const googleLogo = document.createElement('img');
  googleLogo.setAttribute('class', 'logoGoogle');
  googleLogo.setAttribute('id', 'btn-google2');
  googleLogo.setAttribute('src', './assets/icons8-logo-de-google-48 2.png');
  googleLogo.setAttribute('alt', 'logo Google');

  const facebookLogo = document.createElement('img');
  facebookLogo.setAttribute('class', 'logoFacebook');
  facebookLogo.setAttribute('id', 'btn-facebook2');
  facebookLogo.setAttribute('src', './assets/image 15.png');
  facebookLogo.setAttribute('alt', 'logo Facebook');

  const githubLogo = document.createElement('img');
  githubLogo.setAttribute('class', 'logoGithub');
  githubLogo.setAttribute('id', 'btn-github2');
  githubLogo.setAttribute('src', './assets/icons8-github-60.png');
  githubLogo.setAttribute('alt', 'logo Github');

  // guardar logos de providers
  providersContent.append(googleLogo, facebookLogo, githubLogo);

  // redireccionamiento a google, facebook y github
  googleLogo.addEventListener('click', () => { 
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // The signed-in user info.
        const user = result.user;
        console.log(user);
      // ...
      }).catch((error) => {
      // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      });
  });

  facebookLogo.addEventListener('click', () => {
    signInWithPopup(auth, new FacebookAuthProvider())
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        // The signed-in user info.
        const user = result.user;
        console.log(user);
      // ...
      }).catch((error) => {
      // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
      // ...
      });
  });

  githubLogo.addEventListener('click', () => {
    signInWithPopup(auth, new GithubAuthProvider())
      .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        // The signed-in user info.
        const user = result.user;
        console.log(user);
      // ...
      }).catch((error) => {
      // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  });

  enterAccContainer.append(enterAccTitle, signInForm, btnSignInWelcome, providersContent);
  lpContainer.append(header);

  btnSignInWelcome.addEventListener('click', () => {
    const email = document.getElementById('txtEmail').value;
    const password = document.getElementById('txtPassword').value;

    const form = document.getElementById('signUpForm');

    signInAccount(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        errorMessage.innerHTML = '';
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        errorMessage.innerHTML = 'Datos incorrectos';
      });
  });

  return (lpContainer, enterAccContainer);
};