import { home } from '../../src/components/home.js';

jest.mock('../../src/lib/firebaseFunctions.js');
describe('home test', () => {
  it('Al renderizarse, home debe contener un elemento en html que contenga Bienvenida', () => {
    expect(home().innerHTML).toContain('Bienvenida');
  });
});
