let counterValue=0;
const buttonSubtract = document.querySelector(`button[data-action="decrement"]`);
const buttonAdd = document.querySelector(`button[data-action="increment"]`);
const myValue = document.querySelector("#value");

const countSubtract = ()=> {
  counterValue -= 1;
  myValue.textContent = counterValue;
};

const countAdd = ()=> {
  counterValue += 1;
  myValue.textContent = counterValue;
};

buttonSubtract.addEventListener("click", countSubtract);
buttonAdd.addEventListener("click", countAdd);