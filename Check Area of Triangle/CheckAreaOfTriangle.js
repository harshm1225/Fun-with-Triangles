const BaseInput = document.querySelector("#base");
const HeightInput = document.querySelector("#height");
const checkAreaButton = document.querySelector("#check-area");
const outputElement = document.querySelector("#output");
function calculateArea() {
  const height = +HeightInput.value;
  const base = +BaseInput.value;
  const Area = (1 / 2) * base * height;
  outputElement.innerText = `The Area of the Triangle is ${Area}`;
}
checkAreaButton.addEventListener("click", calculateArea);
