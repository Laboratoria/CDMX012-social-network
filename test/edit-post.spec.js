/**
 * @jest-environment jsdom
 */
import { createPosts } from '../src/renderingPosts.js';

jest.mock('../src/firebase-imports.js');

describe('createPosts edit btns', () => {
  document.body.innerHTML = '<div id="postsArea"></div>';
  const postData = {
    reading: 'Book1',
    text: 'I like book1',
    date: 'Tooday',
    uid: '6fgyg87tguyg78t76t87g87t',
  };
  const elements = createPosts(postData, '6fgyg87tguyg78t76t87g87t', 'name', 'username');
  const node = elements.querySelector('.to-edit');
  const result = `<form class="edit-form"><div class="post-content">
  <div><img src="./assets/libro-abierto.png" class="book-icon"> <input type="text" class="reading-txt" name="reading" value="${postData.reading}"></div>
  <br>
  <textarea name="txt" rows="5">${postData.text}</textarea>
  <br>
  </div></form><input type="button" id="btn-save" value="Save">`;
  const btn = elements.querySelector('.editPost');
  btn.dispatchEvent(new Event('click'));

  test('Should change post content to input', () => {
    expect(node.innerHTML).toEqual(result);
  });
});
