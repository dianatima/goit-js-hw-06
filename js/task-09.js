function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const button = document.querySelector('button.change-color');
const body = document.querySelector('body'); 
const span = document.querySelector('span.color'); 

button.addEventListener('click', onButtonClick);

function onButtonClick() {
    let randomHexColor = getRandomHexColor();
    span.textContent = randomHexColor;
    body.style.backgroundColor = randomHexColor;
};
