/**
 * @jest-environment jsdom
 */
import { isValidField } from '../src/lib/saveInfo.js';

jest.mock('../src/firebase-imports.js');

describe('isValidField', () => {
  const name = '';
  const username = '';
  const div = document.createElement('div');
  div.setAttribute('id', 'errorAreaForm');
  document.body.appendChild(div);
  it('debería ser una función que regrese false cuando los campos están vacíos', () => {
    expect(isValidField(name, username)).toBe(false);
  });
  const nameTwo = 'Pedro';
  const usernameTwo = 'Pedro';
  it('debería ser una función que regrese true cuando los campos no están vacíos', () => {
    expect(isValidField(nameTwo, usernameTwo)).toBe(true);
  });
});
