import { onNavigate } from "../index.js";

export const timeline = () => {
  const content = document.createElement("section");

  const textTimeline = document.createElement("h1");
  textTimeline.setAttribute("class", "solovino_trabajando");
  textTimeline.textContent = "Solovino trabajando";

  content.appendChild(textTimeline);
  return content;
};
