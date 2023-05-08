const quizForm = document.querySelector(".quiz-form");
let submitAnswerButton = document.querySelector("#submit-answer-button");
const outputElement = document.querySelector("#output");
const correctAnswers = ["90°", "right-angled"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score++;
    }
    index++;
  }
  outputElement.innerText = `Your score is ${score}`;
}
submitAnswerButton.addEventListener("click", calculateScore);
