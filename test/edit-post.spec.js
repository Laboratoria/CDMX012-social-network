/**
 * @jest-environment jsdom
 */
import { createPosts } from '../src/components/renderingPosts.js';

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
  <div><img src="./assets/open-book.png" class="book-icon"> <input type="text" class="reading-txt" name="reading" value="${postData.reading}"></div>
  <br>
  <textarea name="txt" class="reading-description" rows="5">${postData.text}</textarea>
  <br>
  </div></form><input type="button" id="btn-save" value="Save">`;
  const btn = elements.querySelector('.editPost');
  btn.dispatchEvent(new Event('click'));

  test('Should change post content to input', () => {
    expect(node.innerHTML).toEqual(result);
  });
});

describe('toContent', () => {
  document.body.innerHTML = '<div id="postsArea"></div>';
  const postData = {
    reading: 'Book1',
    text: 'I like book1',
    date: 'Tooday',
    uid: '6fgyg87tguyg78t76t87g87t',
  };
  const elements = createPosts(postData, '6fgyg87tguyg78t76t87g87t', 'name', 'username');
  const node = elements.querySelector('.to-edit');
  const btn = elements.querySelector('.editPost');
  btn.dispatchEvent(new Event('click'));
  const btnSave = elements.querySelector('#btn-save');
  btnSave.dispatchEvent(new Event('click'));
  const result2 = `<div class="post-content">
    <div><img src="./assets/open-book.png" class="book-icon"><p><strong>  ${postData.reading}</strong></p></div> <br>
    <p>${postData.text}</p>
    </div>`;
  test('should return from input to show content', () => {
    expect(node.innerHTML).toEqual(result2);
  });
});
