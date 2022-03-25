import { createUser, createUserWithGoogle } from '../../../src/database/firebase.js';

jest.mock('../../../src/database/firebase-import.js');

describe('createUser', () => {
  it('Should return an object', () => {
    const email = 'triadacinco@gmail.com';
    const password = 'triadacinco';
    const username = 'triadaCinco';
    expect(typeof createUser(email, password, username)).toBe('object');
  });
  it('Should return true', async () => {
    const email = 'triadacinco@gmail.com';
    const password = 'triadacinco';
    const username = 'triadaCinco';
    const result = await createUser(email, password, username);
    expect(result.status).toBe(true);
  });
  it('Should return false', async () => {
    const email = 'hola@gmail.com';
    const password = 'triadacinco';
    const username = 'triadaCinco';
    const result = await createUser(email, password, username);
    expect(result.status).toBe(false);
  });
});

describe('createUserWithGoogle', () => {
  it('Should be a function', async () => {
    expect(typeof createUserWithGoogle).toBe('function');
  });
  it('Should return true', async () => {
    const result = await createUserWithGoogle();
    expect(result).toBe(true);
  });
});
