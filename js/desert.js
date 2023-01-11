const desertImage = "desert.png";

const bgArea = document.querySelector("#background");
const desertBg = document.createElement("div");

desertBg.style.backgroundImage = `url('img/${desertImage}')`;

bgArea.appendChild(desertBg);