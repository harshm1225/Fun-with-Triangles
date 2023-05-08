const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-btn");
const outputElement = document.querySelector("#output");

function calculatesumOfAngles(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3;
}
function isTriangle() {
  const sumOfAngles = calculatesumOfAngles(
    +inputs[0].value,
    +inputs[1].value,
    +inputs[2].value
  );
  if (sumOfAngles === 180) {
    outputElement.innerText = "Yay, These form a triangle";
  } else {
    outputElement.innerText = "Oh Oh! The angles don't form a triangle";
  }
}

isTriangleButton.addEventListener("click", isTriangle);
