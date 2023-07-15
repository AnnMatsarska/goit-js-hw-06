const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }
  const resultObj = {
    email: email.value,
    password: password.value,
  };
  console.log(resultObj);
  event.currentTarget.reset();
}
