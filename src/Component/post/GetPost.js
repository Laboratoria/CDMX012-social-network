import { alConseguirRecetas } from '../../lib/firestore.js';

const GetPost = () => {
  const divPost = document.createElement('div');

  alConseguirRecetas((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const publicacion = doc.data();
      const title = document.createElement('div');
      title.textContent = publicacion.receta;
      divPost.append(title);
    });
  });
  return divPost;
};

export default GetPost;
