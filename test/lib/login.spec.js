import { login, validateEmail } from '../../src/components/login';

jest.mock('../../src/lib/firebaseFunctions.js');
describe('loginTest', () => {
  it('login al rederizarse debe contener Ingresa tu correo en el html ', () => {
    expect(login().innerHTML).toContain('Ingresa tu correo');
  });
});
describe('validateEmail', () => {
  it('login debe ser una funcion', () => {
    expect(validateEmail('mariana')).toBe(null);
  });
});
