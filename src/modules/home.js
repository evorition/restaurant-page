import SushiImage from "../images/sushi.jpg";

const loadHome = ((() => {
  const container = document.createElement("div");

  const header = document.createElement("h1");
  header.textContent = "Yakuza sushi bar";

  const sushiImage = document.createElement("img");
  sushiImage.src = SushiImage;

  const description = document.createElement("p");
  description.textContent = "You have never in your life tried sushi like this. Come and see yourself!";

  container.appendChild(header);
  container.appendChild(sushiImage);
  container.appendChild(description);

  return container;
})());

export default loadHome;
