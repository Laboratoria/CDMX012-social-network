/**
 * @jest-environment jsdom
 */

import { isValidField, usernameValidation } from '../src/lib/saveInfo.js';
import { getDoc } from '../src/firebase-imports.js';

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

describe('usernameValidation', () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'errorAreaUsername');
  document.body.appendChild(div);
  test('the function should return false if username has white spaces or/and special caracters except "." and "_"', async () => {
    const password = 'SaraSara?19';
    const isValid = await usernameValidation(password);
    expect(isValid).toBe(false);
  });
  test('the function should return true if username has no white spaces or/and special caracters except "." and "_", as well as not existing in the database', async () => {
    const password = 'SaraSara19';
    const isValid = await usernameValidation(password);
    expect(isValid).toBe(true);
  });
  test('the function should return false if username exists in the database', async () => {
    getDoc.mockResolvedValue({
      exists: () => true,
    });

    const password = 'SaraSarhhhhhhhha20';
    const isValid = await usernameValidation(password);
    expect(isValid).toBe(false);
  });
});
