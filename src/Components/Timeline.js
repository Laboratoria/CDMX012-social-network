import { onNavigate } from "../index.js";

export const timeline = () => {
  const content = document.createElement("section");

  const solovinoWorking = document.createElement("img");
  solovinoWorking.setAttribute("class", "solovino_working_img");
  solovinoWorking.setAttribute("src", "/Resourses/404-Solovino.png");

  const textTimeline = document.createElement("h1");
  textTimeline.setAttribute("class", "solovino_working");
  textTimeline.textContent = "ERROR 404";

  const returnIndex = document.createElement("button");
  returnIndex.textContent = "Regresa al inicio";
  returnIndex.setAttribute("id", "return_index");
  returnIndex.addEventListener("click", () => onNavigate("/"))
  returnIndex.setAttribute("class", "button");
  returnIndex.setAttribute("type", "button");

  content.append(textTimeline, solovinoWorking, returnIndex);
  return content;
};
