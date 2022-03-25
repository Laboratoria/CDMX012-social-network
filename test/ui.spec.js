/**
 * @jest-environment jsdom
 */
import { showSignUpError, showIncorrectPass } from '../src/ui.js';

jest.mock('../src/firebase-imports.js');

describe('Tests  to check if the error message shows', () => {
  test('e-mail already in use', () => {
    const error = {
      code: 'auth/email-already-in-use',
    };
    document.body.innerHTML = '<div id="errorArea"></div>';
    const errorArea = document.querySelector('#errorArea');
    showSignUpError(error);

    expect(errorArea.innerHTML).toMatchSnapshot();
  });

  test('invalid e-mail', () => {
    const error = {
      code: 'auth/invalid-email',
    };
    document.body.innerHTML = '<div id="errorArea"></div>';
    const errorArea = document.querySelector('#errorArea');
    showSignUpError(error);

    expect(errorArea.innerHTML).toMatchSnapshot();
  });

  test('weak password', () => {
    const error = {
      code: 'auth/weak-password',
    };
    document.body.innerHTML = '<div id="errorArea"></div>';
    const errorArea = document.querySelector('#errorArea');
    showSignUpError(error);

    expect(errorArea.innerHTML).toMatchSnapshot();
  });
});

describe('Tests for matched passwords', () => {
  test('passwords do not match, shows error message', () => {
    document.body.innerHTML = `<div id="errorArea"></div>
    <input type="button" class="btn-signUp" value="Sign Up">`;
    const errorArea = document.querySelector('#errorArea');

    showIncorrectPass('test1234', 'test');

    expect(errorArea.innerHTML).toMatchSnapshot();
  });

  test('passwords match, does not show any error message', () => {
    document.body.innerHTML = `<div id="errorArea"></div>
    <input type="button" class="btn-signUp" value="Sign Up">`;
    const errorArea = document.querySelector('#errorArea');

    showIncorrectPass('test1234', 'test1234');

    expect(errorArea.innerHTML).toMatchSnapshot();
  });
});
