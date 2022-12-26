import navBar from "./modules/navBar";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadContacts from "./modules/contacts";

document.body.insertBefore(navBar, document.body.firstChild);
const contentContainer = document.querySelector("#content");
contentContainer.appendChild(loadHome);

function listenButton(btn) {
  contentContainer.textContent = "";
  switch (btn.textContent) {
    case 'Home':
      contentContainer.appendChild(loadHome);
      break;
    case 'Menu':
      contentContainer.appendChild(loadMenu);
      break;
    case 'Contacts':
      contentContainer.appendChild(loadContacts);
      break;
  }
}

const navButtons = document.querySelectorAll("button");
navButtons.forEach(button => button.addEventListener("click", () => listenButton(button)));
