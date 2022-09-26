
const myInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const SizeInput = (size)=> {
    text.style.fontSize = `${size.target.value}px`;
    console.log(size.target.value)
}


myInput.addEventListener("input", SizeInput);