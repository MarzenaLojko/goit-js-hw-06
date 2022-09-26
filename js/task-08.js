
const Myform = document.querySelector(".login-form");

const Submit = (event)=> {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all fields");
  }
else{
  const result = { email: email.value, password: password.value };
  console.log(result);}
  event.currentTarget.reset();
}

Myform.addEventListener("submit", Submit);