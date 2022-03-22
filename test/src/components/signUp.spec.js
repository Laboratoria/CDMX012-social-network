// import { initializeApp } from '../../../src/database/firebase-import.js';
import { createUser } from '../../../src/database/firebase.js';

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
    // initializeApp fue llamada 1 vez como parámetro de getDatabase
  });
});
