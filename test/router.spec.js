/**
 * @jest-environment jsdom
 */
import { onNavigate } from '../src/app.js';
import { signInAccount } from '../src/lib/auth.js';

jest.mock('../src/firebase-imports.js');

const landPage = () => {
  const landContent = document.createElement('div');
  landContent.innerHTML = 'Read with me';

  return landContent;
};

const signIn = () => {
  const signInContent = document.createElement('div');
  signInContent.innerHTML = 'Hello, whats up?';
  return signInContent;
};

const mockRoutes = {
  '/': landPage,
  '/signIn': signIn,
};

describe('onNavigate', () => {
  test('it should render landPage', () => {
    document.body.innerHTML = '<div id="root"></div>';
    onNavigate('/', mockRoutes);
    const rootDiv = document.getElementById('root');
    expect(rootDiv.textContent).toEqual('Read with me');
  });

  test('it should render signIn', () => {
    document.body.innerHTML = '<div id="root"></div>';
    onNavigate('/signIn', mockRoutes);
    const rootDiv = document.getElementById('root');
    expect(rootDiv.textContent).toEqual('Hello, whats up?');
  });
});
