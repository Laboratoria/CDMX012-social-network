export const login = `
<a onclick="onNavigate('/'); return
      false"><img class="arrowBack" src="img/Arrow.png"></img></a>
<div class="containerRegister">
  <img class="logo" src="img/logoSize.png">
  <div class="containerInputR">
    <input id="emailLogin" type="text" class="register" placeholder="Ingresa tu correo" autocomplete="off"> 
    <input id="passLogin" type="text" class="register" placeholder="Ingresa tu contraseña" autocomplete="off"> 
    <button id="loginButton" class="registerButton">Login</button>
    <section class="githubGoogleButtons">
      <button type="button" class="button">Inicia sesión con Gmail</button>
      <button type="button" class="button">Inicia sesión con Github</button>
    </section>
  </div>
</div>
`;
