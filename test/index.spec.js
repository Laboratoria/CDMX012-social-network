// importamos la funcion que vamos a testear
import { isValidField } from '../src/lib/posts';

jest.mock('../src/firebase-imports.js');

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof isValidField).toBe('function');
  });
});
