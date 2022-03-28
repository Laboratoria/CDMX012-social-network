import { dislike, giveLike } from '../lib/likes.js';

export const like = (click, likeCount, userId, postId, likeList) => {
  const likeElement = document.createElement('div');
  likeElement.setAttribute('class', 'like-btn');
  if (click === true) {
    likeElement.innerHTML = '<img src= "./assets/heart.png" alt="like fill button">';
  } else {
    likeElement.innerHTML = '<img src= "./assets/like.png" alt="like empty button">';
  }
  const count = document.createElement('span');
  count.setAttribute('class', 'likeCount');
  count.textContent = likeCount;

  likeElement.append(count);
  let clicked = click;
  likeElement.addEventListener('click', (e) => {
    e.preventDefault();
    if (!clicked) {
      clicked = true;
      giveLike(userId, postId, likeList);
      likeElement.innerHTML = '<img src= "./assets/heart.png" alt="like fill button">';
      count.textContent = parseInt(count.textContent, 10) + 1;
      likeElement.append(count);
    } else {
      dislike(userId, postId, likeList);
      clicked = false;
      likeElement.innerHTML = '<img src= "./assets/like.png" alt="like empty button">';
      count.textContent = parseInt(count.textContent, 10) - 1;
      likeElement.append(count);
    }
  });
  return likeElement;
};
