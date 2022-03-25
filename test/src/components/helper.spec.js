import {
  validateEmail, validatePassword, validateInformation, errorHandler,
} from '../../../src/components/helper.js';

describe('validateEmail', () => {
  it('Should be a function', () => {
    expect(typeof validateEmail).toBe('function');
  });
  it('Should return true', () => {
    expect(validateEmail('triadacinco@gmail.com')).toBe(true);
  });
  it('Should return false', () => {
    expect(validateEmail('triadacincogmail.com')).toBe(false);
  });
});

describe('validatePassword', () => {
  it('Should be a function', () => {
    expect(typeof validatePassword).toBe('function');
  });
  it('Should return false', () => {
    expect(validatePassword('1234a')).toBe(false);
  });
  it('Should return true', () => {
    expect(validatePassword('123456')).toBe(true);
  });
  it('Should also return true', () => {
    expect(validatePassword('123456password')).toBe(true);
  });
});

describe('validateInformation', () => {
  it('Should be a function', () => {
    expect(typeof validateInformation).toBe('function');
  });
  it('Should return an object', () => {
    const email = 'triadacinco@gmail.com';
    const password = 'triada5uwu';
    expect(typeof validateInformation(email, password)).toBe('object');
  });
  it('Should return true', () => {
    const email = 'triadacinco@gmail.com';
    const password = 'triada5uwu';
    const result = validateInformation(email, password);
    expect(result.status).toBe(true);
  });
  it('Should be a valid email and password', () => {
    const email = 'triadacinco@gmail.com';
    const password = 'triada5uwu';
    const result = validateInformation(email, password);
    expect(result.message).toBe('It is a valid Email and Pasword');
  });
  it('Should return false', () => {
    const email = 'triadacincogmail.com';
    const password = 'triada5uwu';
    const result = validateInformation(email, password);
    expect(result.isEmailCorrect).toBe(false);
  });
  it('Is an incorrect password and email', () => {
    const email = 'triadacincogmail.com';
    const password = 'tri1';
    const result = validateInformation(email, password);
    expect(result.isPasswordCorrect).toBe(false);
  });
  it('Is an incorrect password', () => {
    const email = 'triadacinco@gmail.com';
    const password = 'tri1';
    const result = validateInformation(email, password);
    expect(result.isPasswordCorrect).toBe(false);
  });
});

describe('errorHandler', () => {
  it('Should be a function', () => {
    expect(typeof errorHandler).toBe('function');
  });
  it('Should return error', () => {
    expect(errorHandler('auth/email-already-in-use')).toBe('There is already an account with this email');
  });
  it('Should return an empty string', () => {
    expect(errorHandler('not-an-error-message')).toBe(undefined);
  });
});
