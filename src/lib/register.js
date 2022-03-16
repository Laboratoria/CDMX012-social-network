export const register = `
<a onclick="onNavigate('/'); return
      false"><img class="arrowBack" src="img/Arrow.png"></img></a>
<div class="containerRegister">
    <img class="logo" src="img/logoSize.png">
  <section class="registerText">
    <p> Registrate con tu correo <p>
  </section>
  <div class="containerInputR">
    <input id="mail" type="text" class="register" placeholder="Ingresa tu correo" autocomplete="off"> 
    <input id="user" type="text" class="register" placeholder="Ingresa tu nombre de usuaria" autocomplete="off"> 
    <input id="password" type="text" class="register" placeholder="Ingresa tu contraseña" autocomplete="off"> 
    <input id="area" type="text" class="register" placeholder="Ingresa tu area tech" autocomplete="off"> 
    <button id="registerButton" class="registerButton">Registrarme</button>
  </div>
</div>`;
