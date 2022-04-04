// eslint-disable-next-line import/no-cycle
// import { onNavigate } from '../main.js';
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
  
  const inputNombreRegistro = document.createElement('input');
  inputNombreRegistro.setAttribute('type', 'text');
  inputNombreRegistro.setAttribute('id', 'nombreRegistro');
  inputNombreRegistro.setAttribute('placeholder', 'Nombre');

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

  const btnmostrarcontraseña = document.createElement('button');
  btnmostrarcontraseña.setAttribute('id', 'ojitoRegistro');
  const ojo = document.createElement('IMG');
  ojo.src = './images/ojitobueno.png';
  btnmostrarcontraseña.appendChild(ojo);
  btnmostrarcontraseña.addEventListener('click', () => {
    if (inputContraseñaRegistro.type === 'password') {
      inputContraseñaRegistro.type = 'text';
    } else {
      inputContraseñaRegistro.type = 'password';
    }
  });
  const btnmostrarcontraseña2 = document.createElement('button');
  btnmostrarcontraseña2.setAttribute('id', 'ojitoRegistro2');
  const ojo2 = document.createElement('IMG');
  ojo2.src = './images/ojitobueno.png';
  btnmostrarcontraseña2.appendChild(ojo2);
  btnmostrarcontraseña2.addEventListener('click', () => {
    if (inputContraseñaConfirmar.type === 'password') {
      inputContraseñaConfirmar.type = 'text';
    } else {
      inputContraseñaConfirmar.type = 'password';
    }
  });
  const botonRegistro = document.createElement('button');
  botonRegistro.setAttribute('id', 'botonRegi');
  botonRegistro.setAttribute('class', 'botones');
  botonRegistro.textContent = 'Registrarme';
  botonRegistro.addEventListener('click', () => {
    registrar();
    verificarCorreo();
  });
  seccionGeneral.append(tabla, seccionRegistro);
  // eslint-disable-next-line max-len
  seccionRegistro.append(logoYummi, inputNombreRegistro, inputEmailRegistro, inputContraseñaRegistro, inputContraseñaConfirmar, btnmostrarcontraseña, btnmostrarcontraseña2, botonRegistro);

  return seccionGeneral;
};
