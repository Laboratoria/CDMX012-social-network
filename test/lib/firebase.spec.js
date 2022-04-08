import {
  createUserRed,
  signIn,
  loginGoogle,
  signOutSession,
} from '../../src/lib/firebase.js';

jest.mock('../../src/lib/firebaseFunctions.js');
describe('registerFireBase', () => {
  document.body.innerHTML = '<div id="root"></div>';
  document.body.innerHTML = '<div id="components"></div>';
  it('createUserRed debería ser una función', () => {
    expect(typeof createUserRed).toBe('function');
  });
});

describe('singIn', () => {
  document.body.innerHTML = '<div id="root"></div>';
  document.body.innerHTML = '<div id="components"></div>';
  it('signIn debería ser una función', () => {
    expect(typeof signIn).toBe('function');
  });
});

describe('loginGoogle', () => {
  document.body.innerHTML = '<div id="root"></div>';
  document.body.innerHTML = '<div id="components"></div>';
  it('loginGoogle debería ser una función', () => {
    expect(typeof loginGoogle).toBe('function');
  });
});

describe('signOutSession', () => {
  document.body.innerHTML = '<div id="root"></div>';
  document.body.innerHTML = '<div id="components"></div>';
  it('signOutSession debería ser una función', () => {
    expect(typeof signOutSession).toBe('function');
  });
});
