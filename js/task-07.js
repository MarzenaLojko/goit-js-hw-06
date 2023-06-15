const myInput = document.querySelector('#font-event-control');
const text = document.querySelector('#text');
const SizeInput = (event) => {
  text.style.fontSize = `${event.target.value}px`;
  console.log(event.target.value);
};

myInput.addEventListener('input', SizeInput);
