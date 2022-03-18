export const login = `
<a onclick="onNavigate('/'); return
      false"><img class="arrowBack" src="img/Arrow.png"></img></a>
<div class="containerRegister">
  <img class="logo" src="img/logoSize.png">
  <div class="containerInputR">
    <input type="text" class="register" placeholder="Ingresa tu correo" autocomplete="off"> 
    <input type="password" class="register" placeholder="Ingresa tu contraseña" autocomplete="off"> 
    <button id="loginButton" class="registerButton">Login</button>
  </div>
  <section class="githubGoogleButtons">
    <button type="button" class="button">Inicia sesión con Gmail</button>
    <button type="button" class="button">Inicia sesión con Github</button>
  </section>
</div>
`;
