const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputRename);

function onInputRename() {
  spanEl.textContent = inputEl.value || 'Anonymous';
}
