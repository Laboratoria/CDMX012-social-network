import { createNewUsers } from '../src/lib/firebase-auth.js';

// jest.mock('../src/__mocks__/lib/firebase-imports.js');

describe('createNewUsers', () => {
  it('debería ser una función', () => {
    expect(typeof createNewUsers).toBe('function');
  });
});
