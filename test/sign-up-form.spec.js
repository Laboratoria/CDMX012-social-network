/**
 * @jest-environment jsdom
 */
import { createAccForm } from '../src/pages/sign-up-form.js';

jest.mock('../src/firebase-imports.js');

describe('Tests of account form', () => {
  test('render create account form inside sign-up page', () => {
    const renderCreateAccForm = createAccForm();
    document.body.innerHTML = '<div class="lp-content"></div>';
    const lpContent = document.querySelector('.lp-content');
    lpContent.appendChild(renderCreateAccForm);
    expect(lpContent.innerHTML).toMatchSnapshot();
  });
});
