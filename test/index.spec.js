/**
 * @jest-environment jsdom
 */
import { isValidField } from '../src/lib/posts.js';
import { deletePost } from '../src/lib/deletePost.js';

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

/* describe('usernameValidation', () => {
  const username = 'Pedro?';
  const div = document.createElement('div');
  div.setAttribute('id', 'errorAreaUsername');
  const div2 = document.createElement('div2');
  div2.setAttribute('id', 'errorAreaForm');
  document.body.appendChild(div, div2);
  it('debería ser una función que regrese false cuando un usuario usa
  caracteres especiales en su username', () => {
    expect(usernameValidation(username)).toBe(false);
  });
  const usernameTwo = 'Pedro12';
  it('debería ser una función que regrese true cuando un usuario no usa
  caracteres especiales', () => {
    expect(usernameValidation(usernameTwo)).toBe(true);
  });
}); */

describe('deletePost', () => {
  it('debería ser una función que borra post, es decir, no regresa nada', () => {
    expect(deletePost('docRef')).toBe(undefined);
  });
});
