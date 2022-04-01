export const templatePost = () => {
  const sectionPost = document.createElement('div');
  const templateHola = `
    <p> 'Hola'  </p>`;
  sectionPost.innerHTML = templateHola;

  return sectionPost;
};
