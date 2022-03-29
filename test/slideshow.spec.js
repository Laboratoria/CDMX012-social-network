/**
 * @jest-environment jsdom
 */

import { slideshow } from '../src/components/slideshow';

jest.mock('../src/firebase-imports.js');

describe('Tests of slideshow container', () => {
  test('render slideshow', () => {
    const renderSlideshow = slideshow();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(renderSlideshow);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
});
