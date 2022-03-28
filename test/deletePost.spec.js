/**
 * @jest-environment jsdom
 */
import { deletePost } from '../src/lib/deletePost.js';

jest.mock('../src/firebase-imports.js');

describe('deletePost', () => {
  it('debería ser una función que borra post, es decir, no regresa nada', () => {
    expect(deletePost('docRef')).toBe(undefined);
  });
});
