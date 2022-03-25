/**
 * @jest-environment jsdom
 */
import { signInPage } from '../src/pages/sign-in.js';

jest.mock('../src/firebase-imports.js');

describe('Tests of signInPage', () => {
  it('render signInPage', () => {
    const renderSignIn = signInPage();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(renderSignIn);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
});
