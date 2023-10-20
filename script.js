const score = document.querySelector(".score");
const submit = document.querySelector(".submit");
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const input = document.querySelector(".input");

const randomNumber = (num) => {
  return (num.innerText = Math.floor(Math.random() * 11));
};

let num1 = randomNumber(number1);
let num2 = randomNumber(number2);

console.log(num1);
console.log(num2);

let point = 0;
const startGame = () => {
  if (input.value == num1 * num2) {
    point++;
    score.innerText = point;
    input.value = "";
    num1 = randomNumber(number1);
    num2 = randomNumber(number2);
  } else {
    point--;
    score.innerText = point;
    input.value = "";
    num1 = randomNumber(number1);
    num2 = randomNumber(number2);
  }

  console.log(num1);
  console.log(num2);
};

submit.addEventListener("click", startGame);
