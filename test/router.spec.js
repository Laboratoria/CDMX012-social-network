/**
 * @jest-environment jsdom
 */
import { onNavigate } from '../src/app.js';

jest.mock('../src/firebase-imports.js');

const landPage = () => {
  const landContent = document.createElement('div');
  landContent.innerHTML = 'Read with me';

  return landContent;
};

const mockRoutes = {
  '/': landPage,
};

describe('onNavigate', () => {
  test('it should render landPage', () => {
    document.body.innerHTML = '<div id="root"></div>';
    onNavigate('/', mockRoutes);
    const rootDiv = document.getElementById('root');
    expect(rootDiv.textContent).toEqual('Read with me');
  });
});
