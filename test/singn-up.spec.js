/**
 * @jest-environment jsdom
 */
import { signUpPage } from '../src/pages/sign-up.js';

jest.mock('../src/firebase-imports.js');

describe('Tests  of signUpPage', () => {
  test('render sign up page', () => {
    const renderSignUp = signUpPage();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(renderSignUp);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
});
