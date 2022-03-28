/**
 * @jest-environment jsdom
 */
import {
  showSignUpError, showIncorrectPass, showPassword, showAndHideItems,
} from '../src/components/ui.js';

jest.mock('../src/firebase-imports.js');

describe('Tests to check what error message is shown', () => {
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
  test('passwords do not match, shows error message and disables button', () => {
    document.body.innerHTML = `<div id="root">
    <div id="errorArea"></div>
    <input type="button" class="btn-signUp" value="Sign Up">
    </div>`;
    const root = document.getElementById('root');

    showIncorrectPass('test1234', 'test');

    expect(root.innerHTML).toMatchSnapshot();
  });

  test('passwords match, does not show any error message, sign-up button is enabled', () => {
    document.body.innerHTML = `<div id="root">
    <div id="errorArea"></div>
    <input type="button" class="btn-signUp" value="Sign Up">
    </div>`;
    const root = document.getElementById('root');

    showIncorrectPass('test1234', 'test1234');

    expect(root.innerHTML).toMatchSnapshot();
  });
});

describe('Tests to see if the password unmasks:', () => {
  test('unmask password', () => {
    document.body.innerHTML = `<input type="password" id="pass">
    <span id="icon">visibility</span>`;
    const pass = document.getElementById('pass');
    const icon = document.getElementById('icon');

    showPassword(pass, icon);

    expect(pass.type).toBe('text');
    expect(icon.innerText).toBe('visibility_off');
  });

  test('mask password', () => {
    document.body.innerHTML = `<input type="text" id="pass">
    <span id="icon">visibility_off</span>`;
    const pass = document.getElementById('pass');
    const icon = document.getElementById('icon');

    showPassword(pass, icon);

    expect(pass.type).toBe('password');
    expect(icon.innerText).toBe('visibility');
  });
});

describe('Tests  for the style display of shown and hidden items', () => {
  test('Show item 1, hide item 2', () => {
    document.body.innerHTML = `<div id="item1"></div>
    <div id="item2"></div>`;
    const item1 = document.getElementById('item1');
    const item2 = document.getElementById('item2');
    showAndHideItems(item1, item2);

    expect(item1.style.display).toBe('flex');
    expect(item2.style.display).toBe('none');
  });
});
