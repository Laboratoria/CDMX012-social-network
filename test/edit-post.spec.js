/**
 * @jest-environment jsdom
 */
import { createPosts } from '../src/renderingPosts.js';

jest.mock('../src/firebase-imports.js');

describe('toEditable', () => {
  document.body.innerHTML = '<div id="postsArea"></div>';
  const postData = {
    reading: 'Book1',
    text: 'I like book1',
    date: 'Tooday',
    uid: '6fgyg87tguyg78t76t87g87t',
  };
  const result = createPosts(postData, '6fgyg87tguyg78t76t87g87t', 'name', 'username');
  const node = result.querySelector('.to-edit');
  const result2 = `<form class="edit-form"><div class="post-content">
  <div><img src="./assets/libro-abierto.png" class="book-icon"> <input type="text" class="reading-txt" name="reading" value="${postData.reading}"></div>
  <br>
  <textarea name="txt" rows="5">${postData.text}</textarea>
  <br>
  </div></form><input type="button" id="btn-save" value="Save">`;
  const btn = result.querySelector('.editPost');
  btn.dispatchEvent(new Event('click'));

  test('Should change post content to input', () => {
    expect(node.innerHTML).toEqual(result2);
  });
  test('should return from input to show content', () => {
    const btnSave = result.querySelector('#btn-save');
    btnSave.dispatchEvent(new Event('click'));
    const result3 = `<div class="post-content">
    <div><img src= "./assets/libro-abierto.png" class= "book-icon"><p><strong>  ${postData.reading}</strong></p></div> <br>
    <p>${postData.text}</p>
    </div>`;

    expect(node.innerHTML).toEqual(result3);
  });
});
