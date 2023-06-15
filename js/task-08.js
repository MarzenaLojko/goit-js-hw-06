const Myform = document.querySelector('.login-form');

const Submit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === '') {
    return alert('Please provide valid email');
  } else if (password.value.trim() === '') {
    return alert('Password cannot be empty.');
  } else {
    const result = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    console.log(result);
  }
  event.currentTarget.reset();
};

Myform.addEventListener('submit', Submit);
