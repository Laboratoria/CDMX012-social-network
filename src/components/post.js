export const templatePost = () => {
  const sectionPost = document.createElement('div');
  sectionPost.setAttribute('class', 'sectionPost');
  const templateHola = `
  <div id="templateTop">
    <img id="profilePicture" src="img/profilePicture.png"></img>
    <label id="profileName">Ana</label>
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
