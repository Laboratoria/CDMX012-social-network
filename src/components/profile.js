import { onNavigate } from "../main.js";


export const profile = () => {
  const profileContainer = document.createElement("section");
  profileContainer.setAttribute("class", "background_Content");

  ////////DATA SECTION
  const prifileSection = document.createElement("section");
  prifileSection.setAttribute("class", "account_section");

  ////////////////// logo y retorno

  const profileClose = document.createElement("img");
  profileClose.setAttribute("src", "../Resourses/icons/flecha.png");
  profileClose.setAttribute("class", "register_close");
  profileClose.addEventListener("click", () => {
    onNavigate("/Register");
  });

  const imgProfileLogo = document.createElement("img");
  imgProfileLogo.setAttribute("src", "../Resourses/Logos/Solovino_Black.png");
  imgProfileLogo.setAttribute("class", "solovino_logo_logIn");


////////////// datos usuario
// const uploadImageSection = document.createElement("section");
 

  const uploadButton = document.createElement("form");
  uploadButton.setAttribute("action", "/action_page.php");
  uploadButton.setAttribute("class", "upload_image_section");

  const labelProfileImage = document.createElement("label");
  labelProfileImage.setAttribute("src", "../Resourses/icons/profile_image.png");

  const inputUploadButton = document.createElement("input");
  inputUploadButton.setAttribute("type", "file");
  inputUploadButton.setAttribute("name", "filename");
  inputUploadButton.setAttribute("id", "Myfile");
  inputUploadButton.setAttribute("class", "upload_image_button");


  uploadButton.append(labelProfileImage, inputUploadButton);




  // const prifileImageSection = document.createElement("img");

  // prifileImageSection.setAttribute("class", "profile_image");




  prifileSection.append(profileClose, imgProfileLogo, uploadButton, );


  profileContainer.append(prifileSection);




  profileContainer.append(prifileSection);

  return profileContainer;
};