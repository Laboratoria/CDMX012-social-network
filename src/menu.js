export const menu = () => {
  const background = document.createElement('div');
  background.setAttribute('id', 'general-container');

  const menuContainer = document.createElement('div');
  menuContainer.setAttribute('id', 'menu-container');

  const profileInfo = document.createElement('div');
  profileInfo.setAttribute('id', 'profile-container');

  const close = document.createElement('img');
  close.setAttribute('src', './assets/close.png');
  close.setAttribute('id', 'close-img');

  close.addEventListener('click', () => {
    const body = document.body;
    body.style.overflow = '';
    const fathernode = document.querySelector('.readingPage');
    fathernode.removeChild(background);
  });

  profileInfo.append(close);

  const configuration = document.createElement('div');
  configuration.setAttribute('id', 'config-container');
  configuration.innerHTML = '<div><img src="./assets/logout.png"></img><p>Sign Out</p></div>';

  menuContainer.append(profileInfo, configuration);
  background.append(menuContainer);

  return background;
};
