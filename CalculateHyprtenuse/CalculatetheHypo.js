const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");
function calculateSumOfSquares(a, b) {
  return a * a + b * b;
}
function calculateHypotenuse() {
  const side1 = +sides[0].value;
  const side2 = +sides[1].value;
  const sumOfSquares = calculateSumOfSquares(side1, side2);
  const Hypotenuse = Math.sqrt(sumOfSquares).toFixed(2);
  outputEl.innerText = "The Hypotenuse of the triangle is " + Hypotenuse;
}
hypotenuseBtn.addEventListener("click", calculateHypotenuse);
