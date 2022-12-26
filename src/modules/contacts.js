const loadContacts = ((() => {
  const container = document.createElement("div");

  const header = document.createElement("h1");
  header.textContent = "Contact Us";

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "8 (800) 555-35-35"

  const address = document.createElement("p");
  address.textContent = "Tolstoy St 88, Pavlodar 140000";

  container.appendChild(header);
  container.appendChild(phoneNumber);
  container.appendChild(address);

  return container;
})());

export default loadContacts;
