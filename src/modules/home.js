import "../style.css";
import SushiImg from "../images/sushi.jpg";

const loadHome = ((() => {
  const container = document.createElement("div");
  container.id = "main";


  const sushiImage = document.createElement("img");
  sushiImage.src = SushiImg;

  const description = document.createElement("p");
  description.textContent = "You have never in your life tried sushi like this. Come and see yourself!";

  container.appendChild(sushiImage);
  container.appendChild(description);

  return container;
})());

export default loadHome;
