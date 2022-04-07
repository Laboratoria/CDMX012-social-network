import { createUserRed } from '../../src/lib/firebase.js';

jest.mock('../../src/lib/firebaseFunctions.js');
describe('registerFireBase', () => {
  document.body.innerHTML = '<div id="root"></div>';
  document.body.innerHTML = '<div id="components"></div>';
  it('debería ser una función', () => {
    expect(typeof createUserRed).toBe('function');
  });
});
