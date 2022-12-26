import navBar from "./modules/navBar";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadContacts from "./modules/contacts";

((() => {
  // Initialization
  document.body.insertBefore(navBar, document.body.firstChild);
  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(loadHome);

  // Tab switcher
  const navBarBtns = navBar.querySelectorAll("button");
  navBarBtns.forEach(btn => btn.addEventListener("click", e => {
    if (e.target.classList.contains("selected")) {
      return;
    }

    for (const button of navBarBtns) {
      if (button.classList.contains("selected")) {
        button.classList.toggle("selected");
      }
    }

    e.target.classList.toggle("selected")
    contentContainer.textContent = "";
    switch (e.target.id) {
      case "home-btn":
        contentContainer.appendChild(loadHome);
        break;
      case "menu-btn":
        contentContainer.appendChild(loadMenu);
        break;
      case "contacts-btn":
        contentContainer.appendChild(loadContacts);
        break;
    }
  }));
})());
