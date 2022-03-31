
/* ------ AQUI VAN ELEMENTOS PARA CREAR POST------ */
// import { onNavigate } from '../main.js';
// eslint-disable-next-line import/no-cycle
import { userInfo } from '../lib/firebase.js';

export const home = () => {
  const newsFeedSection = document.createElement('section');
  newsFeedSection.className = 'screenNews';
  newsFeedSection.id = 'newsFeedScreen';
  const newsHeader = document.createElement('header');
  newsHeader.className = 'usernameHeader';
  const userImg = document.createElement('img');
  userImg.className = 'userImg';
  const usernameProfile = document.createElement('p');
  usernameProfile.className = 'username';
  userInfo(userImg, usernameProfile);
  const postSection = document.createElement('section');
  const postText = document.createElement('textarea');
  postText.id = 'postText';
  postText.placeholder = 'What are you playing?';
  const submitPost = document.createElement('button');
  submitPost.id = 'submitPost';
  submitPost.textContent = 'Post';
  newsHeader.append(userImg, usernameProfile);
  postSection.append(postText, submitPost);
  newsFeedSection.append(newsHeader, postSection);
  return newsFeedSection;
};
