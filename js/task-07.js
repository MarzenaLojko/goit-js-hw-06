const textInput = document.querySelector("#font-size-control");
const output = document.querySelector("#text");
output.getElementsByClassName.fontSize `${event.target.value}px`;

textInput.addEventListener("input",(event) => {
    output.textContent = event.currentTarget.value;

});




const myInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const SizeInput = (size)=> {
    text.style.fontSize = `${size.target.value}px`;
    console.log(size.target.value)
}


myInput.addEventListener("input", SizeInput);