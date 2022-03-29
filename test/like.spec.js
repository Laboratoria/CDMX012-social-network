/**
 * @jest-environment jsdom
 */
import { like } from '../src/components/like.js';

jest.mock('../src/firebase-imports.js');

describe('Tests of like', () => {
  test('render like', () => {
    const renderlike = like();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(renderlike);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
});
