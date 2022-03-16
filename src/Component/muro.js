export const muro = () => {
  const seccionMuro = document.createElement('section');

  const logoYummi = document.createElement('IMG');
  logoYummi.src = './images/logo.png';
  logoYummi.setAttribute('id', 'logoinicio');
  logoYummi.setAttribute('alt', 'Yummy, bienvenido a tu mundo de cocina');

  const parrafo = document.createElement('h1');
  parrafo.textContent = 'Proximamente...';

  seccionMuro.append(logoYummi, parrafo);
  return seccionMuro;
};
