import { login } from "./components/Login.js";
import { register } from "./components/Register.js";
import { timeline } from "./components/Timeline.js";
// import "./styles/main.css";

const rootContent = document.getElementById("root");

const routes = {
  "/": login,
  "/Register": register,
  "/Timeline": timeline,
};

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  while (rootContent.firstChild) {
    rootContent.removeChild(rootContent.firstChild);
  }

  rootContent.appendChild(routes[pathname]());
};


window.onpopstate = () => {
  rootContent.appendChild(routes[window.location.pathname]());
};

let component = routes[window.location.pathname];
rootContent.appendChild(component());
