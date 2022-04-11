import { onNavigate } from '../src/main.js';

jest.mock('../src/lib/firebaseFunctions.js');
describe('onNavigate', () => {
  it('Cambia a Feed', () => {
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(onNavigate('/feed'));
    expect(window.location.pathname).toBe('/feed');
  });
});
