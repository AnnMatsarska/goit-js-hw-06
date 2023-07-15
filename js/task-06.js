const inputEl = document.querySelector('#validation-input');
const inputElLength = inputEl.dataset.length;

inputEl.addEventListener('blur', onBlur);

function onBlur(e) {
  if (e.currentTarget.value.length === Number(inputElLength)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}
