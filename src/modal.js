
openModal() {
    const showModal = document.createElement("section");
    showModal.setAttribute("id", "modal");
    showModal.setAttribute("class", "modal");

    const allContent = document.createElement("article");
    allContent.setAttribute("id", "idModal");
    allContent.setAttribute("class", "modalDialog");

    const buttonModal = document.createElement("a");
    const textButton = document.createTextNode("X");
    buttonModal.appendChild(textButton);
    buttonModal.setAttribute("href", "#");
    buttonModal.setAttribute("class", "closeModal");
    buttonModal.setAttribute("id", "buttonModal");
}

}
