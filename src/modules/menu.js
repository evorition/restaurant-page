import "../style.css";
import FutomakiImg from "../images/futomaki.jpg";
import MakizushiImg from "../images/makizushi.jpg";
import NigirizushiImg from "../images/nigirizushi.jpg";
import OshiZushiImg from "../images/oshi-zushi.jpg";

function populateMenuItem(img, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const menuItemImg = document.createElement("img");
  const menuItemDescription = document.createElement("p");
  menuItemImg.src = img;
  menuItemDescription.textContent = description;

  menuItem.appendChild(menuItemImg);
  menuItem.appendChild(menuItemDescription);

  return menuItem;
}

const loadMenu = ((() => {
  const container = document.createElement("div");
  container.id = "main";

  const flexboxContainer = document.createElement("div");
  flexboxContainer.id = "menu-items";

  const menuItem1 = populateMenuItem(FutomakiImg, 'Futomaki (太巻, "thick, large, or fat rolls") is a large, cylindrical style of sushi, usually with nori on the outside.');
  const menuItem2 = populateMenuItem(MakizushiImg, 'Makizushi (巻き寿司, "rolled sushi"), norimaki (海苔巻き, "nori roll", used generically for other dishes as well) or makimono (巻物, "variety of rolls") is a cylindrical piece formed with the help of a mat known as a makisu (巻き簾).');
  const menuItem3 = populateMenuItem(NigirizushiImg, 'Nigirizushi (握り寿司, "hand-pressed sushi") consists of an oblong mound of sushi rice that a chef typically presses between the palms of the hands to form an oval-shaped ball and a topping (the neta) draped over the ball.');
  const menuItem4 = populateMenuItem(OshiZushiImg, 'Oshizushi (押し寿司, "pressed sushi"), also known as hako-zushi (箱寿司, "box sushi"), is a pressed sushi from the Kansai region, a favorite and specialty of Osaka.');

  flexboxContainer.appendChild(menuItem1);
  flexboxContainer.appendChild(menuItem2);
  flexboxContainer.appendChild(menuItem3);
  flexboxContainer.appendChild(menuItem4);
  container.appendChild(flexboxContainer);

  return container;
})());

export default loadMenu;
