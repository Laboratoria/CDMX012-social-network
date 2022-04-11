import { register, validateEmail } from '../../src/components/register.js';

jest.mock('../../src/lib/firebaseFunctions.js');
describe('register test', () => {
  it('Al renderizarse, register debe contener', () => {
    expect(register().innerHTML).toContain('Registrate con tu correo');
  });
});
describe('validateEmail', () => {
  it('login debe ser una funcion', () => {
    expect(validateEmail('mariana')).toBe(null);
  });
});
