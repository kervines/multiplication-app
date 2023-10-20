const score = document.querySelector(".score");
const submit = document.querySelector(".submit");
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const input = document.querySelector(".input");

const randomNumber = () => {
  return Math.floor(Math.random() * 11);
};

const num1 = (number1.innerText = randomNumber());
const num2 = (number2.innerText = randomNumber());

const atualizaNumber = (num) => {
  return (num.innerText = randomNumber());
};

let point = 0;
const startGame = () => {
  if (input.value == num1 * num2) {
    point++;
    score.innerText = point;
    input.value = "";
  } else {
    point--;
    score.innerText = point;
    input.value = "";
  }
  atualizaNumber(num1);
  atualizaNumber(num2);
};

submit.addEventListener("click", startGame);
