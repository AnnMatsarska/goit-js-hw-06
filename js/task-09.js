const colorBtn = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

colorBtn.addEventListener('click', onClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClick() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanEl.textContent = randomColor;
}
