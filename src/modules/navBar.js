const navBar = ((() => {
  const header = document.createElement("header");
  const nav = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";

  const contactsButton = document.createElement("button");
  contactsButton.textContent = "Contacts";

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactsButton);

  header.appendChild(nav);

  return header;
})());

export default navBar;
