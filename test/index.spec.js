// importamos la funcion que vamos a testear
import { createUserRed } from '../src/lib/firebase';

describe('registerFireBase', () => {
  it('debería ser una función', () => {
    expect(typeof createUserRed).toBe('function');
  });
});
