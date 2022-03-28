/**
 * @jest-environment jsdom
 */
import { landingPage } from '../src/pages/landing-page.js';

jest.mock('../src/firebase-imports.js');

describe('Tests  of landingPage', () => {
  test('render landingpage', () => {
    const renderLanding = landingPage();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(renderLanding);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
});
