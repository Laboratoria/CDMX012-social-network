export const login = `
<img src="images/login.png" alt="Tabla de cocina" id="cocina" class="desktop">

  <section  id="login">
      <img src="images/logo.png" alt="Yummy, bienvenido a tu mundo de cocina" id="logoinicio">
      <input type="email" id="email" placeholder="Email">
      <input type="password" id="contraseña" placeholder="Contraseña">
      <a href="#" onclick="onNavigate('/muro'); return false;"><button class="botones" id="loginbo">Iniciar sesión</button></a>
      <button class="botones" id="google"><img src="images/google.png" alt="google" id="iconogoo">
        Iniciar con Google
      </button>
      <p class="letras1">¿Olvidaste tu contraseña?</p>
      <p class="letras2">¿No tienes cuenta con nosotros?</p>
      <a href="#" onclick="onNavigate('/registro'); return false;"><button id="registro">Regístrate aquí</button></a>
      
  </section>
    

`;
