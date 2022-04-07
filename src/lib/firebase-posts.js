import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  onSnapshot,
} from './firebase-imports.js';
import { auth, db } from './firebase-config.js';

export const savePost = (post) => {
  const user = auth.currentUser;
  const date = new Date();
  addDoc(collection(db, 'posts'), {
    username: user.displayName,
    photo: user.photoURL,
    date,
    post,
  });
};

const renderPost = (data) => {
  const postFeedNews = document.getElementById('postFeed');
  const post = document.createElement('section');
  post.className = 'sectionContainerPost';
  const name = document.createElement('p');
  name.className = 'username';
  name.textContent = data.username;
  const photo = document.createElement('img');
  photo.src = data.photo;
  const postText = document.createElement('p');
  postText.className = 'postText';
  postText.textContent = data.post;
  post.append(name, photo, postText);
  postFeedNews.append(post);
  return postFeedNews;
};

export async function showPosts() {
  // const querySnapshot = getDocs(collection(db, 'posts'));
  const q = await query(collection(db, 'posts'), orderBy('date', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((post) => {
      const postDocs = post.data();
      console.log(postDocs.date);
      renderPost(postDocs);
    });
  });
}
