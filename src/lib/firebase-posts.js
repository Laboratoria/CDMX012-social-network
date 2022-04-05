import {
  collection,
  addDoc,
  getDoc,
} from './firebase-imports.js';
import { auth, db } from './firebase-config.js';

export const savePost = (post) => {
  const user = auth.currentUser;
  addDoc(collection(db, 'posts'), {
    username: user.displayName,
    post,
  });
};

export const getPost = () => {
  const posts = collection(db, 'posts');
  const docPost = getDoc(posts);
  docPost.forEach((element) => {
    const postNews = document.getElementById('sectionContainerPost');
    if (element.posts.exists()) {
      const postSection = document.createElement('section');
      postSection.className = 'sectionContainerPost';
      const userPostValue = posts.username;
      const postValue = posts.post;
      const username = document.createElement('p');
      const postText = document.createElement('p');
      username.textContent(userPostValue);
      postText.textContent(postValue);
      postNews.append(username, postText);
    }
    return postNews;
  });
};
