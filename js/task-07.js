const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onInput);

function onInput() {
  const changedFontSize = inputEl.value;

  spanEl.style.fontSize = changedFontSize + 'px';
}
