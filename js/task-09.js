function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const currentColor = document.querySelector('.color');
const colorButton = document.querySelector('.change-color');

colorButton.addEventListener('click', () => {
  currentColor.textContent = document.body.style.backgroundColor = getRandomHexColor();
});