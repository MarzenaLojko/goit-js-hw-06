const myInput = document.querySelector('#validation-input');
const onBlur = (event) => {
  const input = event.currentTarget;
  const inputLength = Number(input.dataset.length);
  if (input.value.length === inputLength) {
    console.log('valid');
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    console.log('invalid');
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
};
myInput.addEventListener('blur', onBlur);
