// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// eslint-disable-next-line import/no-cycle
import { registrar, verificarCorreo } from '../lib/index.js';

export const registro = () => {
  const seccionGeneral = document.createElement('section');
  const tabla = document.createElement('IMG');
  tabla.src = './images/login.png';
  tabla.setAttribute('id', 'cocina');
  tabla.setAttribute('alt', 'Tabla de cocina');
  tabla.setAttribute('class', 'desktop');

  const seccionRegistro = document.createElement('section');
  seccionRegistro.setAttribute('id', 'login');

  const logoYummi = document.createElement('IMG');
  logoYummi.src = './images/logo.png';
  logoYummi.setAttribute('id', 'logoinicio');
  logoYummi.setAttribute('alt', 'Yummy, bienvenido a tu mundo de cocina');

  const inputEmailRegistro = document.createElement('input');
  inputEmailRegistro.setAttribute('type', 'email');
  inputEmailRegistro.setAttribute('id', 'emailRegi');
  inputEmailRegistro.setAttribute('placeholder', 'Email');

  const inputContraseñaRegistro = document.createElement('input');
  inputContraseñaRegistro.setAttribute('type', 'password');
  inputContraseñaRegistro.setAttribute('id', 'contraseñaRegi');
  inputContraseñaRegistro.setAttribute('placeholder', 'Contraseña');

  const inputContraseñaConfirmar = document.createElement('input');
  inputContraseñaConfirmar.setAttribute('type', 'password');
  inputContraseñaConfirmar.setAttribute('id', 'contraseñaRegidos');
  inputContraseñaConfirmar.setAttribute('placeholder', 'Confirmar Contraseña');

  const botonRegistro = document.createElement('button');
  botonRegistro.setAttribute('id', 'botonRegi');
  botonRegistro.setAttribute('class', 'botones');
  botonRegistro.textContent = 'Registrarme';
  botonRegistro.addEventListener('click', () => {
    registrar();
    verificarCorreo();
  // onNavigate('/muro');
  });
  // botonRegistro.addEventListener('click', () => {
  //   registrar();
  // });
  seccionGeneral.append(tabla, seccionRegistro);
  // eslint-disable-next-line max-len
  seccionRegistro.append(logoYummi, inputEmailRegistro, inputContraseñaRegistro, inputContraseñaConfirmar, botonRegistro);

  return seccionGeneral;
};
