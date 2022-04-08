import { login } from '../../src/components/login';

jest.mock('../../src/lib/firebaseFunctions.js');
describe('loginTest', () => {
  it('login debe ser una funcion', () => {
    expect(login().innerHTML).toContain('Ingresa tu correo');
  });
});
