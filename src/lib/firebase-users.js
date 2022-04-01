import { auth } from './firebase-config.js';

export const userInfo = (photo, name) => {
  const user = auth.currentUser;
  if (user !== null) {
    const displayName = user.displayName;
    const photoURL = user.photoURL;
    photo.setAttribute('src', `${photoURL}`);
    name.setAttribute('alt', '');
    // eslint-disable-next-line no-param-reassign
    name.textContent = `${displayName}`;
  }
};
