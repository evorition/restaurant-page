const navBar = ((() => {
  const header = document.createElement("header");

  const title = document.createElement("h1");
  title.textContent = "Yakuza Sushi Bar";

  const nav = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.id = "home-btn";
  homeButton.classList.add("selected");
  homeButton.textContent = "Home";

  const menuButton = document.createElement("button");
  menuButton.id = "menu-btn";
  menuButton.textContent = "Menu";

  const contactsButton = document.createElement("button");
  contactsButton.id = "contacts-btn";
  contactsButton.textContent = "Contacts";

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactsButton);

  header.appendChild(title);
  header.appendChild(nav);

  return header;
})());

export default navBar;
