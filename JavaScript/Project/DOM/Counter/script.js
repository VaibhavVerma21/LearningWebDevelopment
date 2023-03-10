let increment = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let reset = document.querySelector("#reset");
let value = document.querySelector("#value");

const incrementValue = () => value.innerText = parseInt(value.innerText) + 1;
const decrementValue = () => value.innerText = parseInt(value.innerText) - 1;
const resetValue = () => value.innerText = 0;

increase.addEventListener('click', incrementValue);
decrease.addEventListener('click', decrementValue);
reset.addEventListener('click', resetValue);