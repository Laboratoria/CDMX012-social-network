// export const createPost = () => {
//   const writePost = document.createElement('div');
//   writePost.setAttribute('class', 'sectionPost');
//   const templateWrite = `
//   <div ="templateTop">
//     <label id="profileName">Ana</label>
//     <img id="close" src="img/close.png"></img>
//   </div>
//   <input id="inputPost" placeholder="¿Que estas pensando?"></input>
//   <button id="sendPost"> Enviar </button>
//   `;
//   writePost.innerHTML = templateWrite;
//   return writePost;
// };

export const templatePost = () => {
  const sectionPost = document.createElement('div');
  sectionPost.setAttribute('class', 'sectionPost');
  const templateHola = `
  <div class="templateTop">
    <img id="profilePicture" src="img/profilePicture.png"></img>
    <label class="profileName">Ana</label>
    <img id="dots" src="img/dots.png"></img>
  </div>
  <p id="inputPost"> Holaaaa!! asdfghjkasdfghjkasdfghjkasdfghjkasdfghjkasdfghjkasdfghjklasdfghjkl</p>
  <div id="likeComment">
    <img id="likePost" src="img/like.png"></img>
    <img id="commentPost" src="img/comment.png"></img>
  </div>
  `;
  sectionPost.innerHTML = templateHola;
  return sectionPost;
};
