export const signUpPage = () => {
  const createAccContainer = document.createElement('div');
  createAccContainer.setAttribute('class', 'createAccount-container');

  const createAccTitle = document.createElement('h2');
  createAccTitle.setAttribute('class', 'account-title');
  createAccTitle.innerHTML = 'Create an Account';

  const signUpForm = document.createElement('form');
  signUpForm.setAttribute('class', 'account-form');
  signUpForm.setAttribute('id', 'signUpForm');

  const formContent = `
    <label for="email" class="e-mail">E-mail</label>
    <img class="mail" src='./assets/icons8-email-64 1.png' alt="mail" />
    <input name="email" class="e-mail" id="txtEmail" type="email" placeholder="e-mail@example.com" required />
      
    <label for="password" class="password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters">Password</label>
    <img class="padlock" src='./assets/icons8-contraseña-24 1.png' alt="padlock" />
    <input name="password" class="password" id="txtPassword" type="password" placeholder="Insert your password here" required />
    
    <p class="error show-error-msg"></p>
      
    <input type="button" class="btn-signUp" id="btn-signUp" value="Sign Up" />
    
    <span class="otherProviders">
      <label for="" class="otherProviders">or sign up with</label>
    </span>
    <span class="logosProviders">
      <img class="logoGoogle" id="btn-google" src="./assets/icons8-logo-de-google-48 2.png" alt="logoGoogle">
      <img class="logoFacebook" id="btn-facebook" src="./assets/image 15.png" alt="logoFacebook"></img>
     </span>
  `;

  signUpForm.innerHTML = formContent;

  createAccContainer.append(createAccTitle, signUpForm);

  return createAccContainer;
};
