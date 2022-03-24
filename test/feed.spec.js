/**
 * @jest-environment jsdom
 */
import { feed } from '../src/pages/feed.js';

jest.mock('../src/firebase-imports.js');

describe('Tests of feed', () => {
  test('render feed', () => {
    const renderFeed = feed();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(renderFeed);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
});
