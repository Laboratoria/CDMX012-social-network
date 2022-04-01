function constructorPost(post) {
  for (const onePost of post) {
    const contentpost = document.createElement("section");
    contentpost.setAttribute("class", "content-post");

    const carSpace = document.createElement("section");
    carSpace.setAttribute("class", "car-space");

    const namePerson = document.createElement("h3");
    namePerson.textContent = `${onePost.date}`;

    const aboutPost = document.createElement("p");
    aboutPost.setAttribute("class", "about-post");
    aboutPost.textContent = `${onePost.post}`;

    carSpace.append(namePerson);
    namePerson.contentpost.append(carSpace);
  }
}

export default constructorPost;
