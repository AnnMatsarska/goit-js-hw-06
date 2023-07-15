const ref = {
  inputDecrement: document.querySelector('[data-action="decrement"]'),
  inputIncrement: document.querySelector('[data-action="increment"]'),
  spanEl: document.querySelector('#value'),
};

let counterValue = 0;

ref.inputDecrement.addEventListener('click', onDecrmtClick);

function onDecrmtClick() {
  counterValue -= 1;
  ref.spanEl.textContent = counterValue;
}

ref.inputIncrement.addEventListener('click', onIncrmtClick);

function onIncrmtClick() {
  counterValue += 1;
  ref.spanEl.textContent = counterValue;
}
