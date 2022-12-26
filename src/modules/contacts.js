const loadContacts = ((() => {
  const container = document.createElement("div");
  container.id = "main";

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "Phone: 8 (800) 555-35-35"

  const address = document.createElement("p");
  address.textContent = "Address: Tolstoy St 88, Pavlodar 140000";

  container.appendChild(phoneNumber);
  container.appendChild(address);

  return container;
})());

export default loadContacts;
