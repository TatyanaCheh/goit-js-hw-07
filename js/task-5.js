function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector('body');
const colorSpam = document.querySelector('.color');
const colorChangeBtn = document.querySelector('.change-color');

colorChangeBtn.addEventListener('click', colorBtn);
function colorBtn() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorSpam.textContent = randomColor;
}