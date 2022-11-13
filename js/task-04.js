const incrementBtn  = document.querySelector("[data-action='increment']");
const decrementBtn  = document.querySelector("[data-action='decrement']");

let counterValue = 0;

const onIncrementBtn = () => {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
};

const onDecrementBtn = () => {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
};

incrementBtn.addEventListener('click', onIncrementBtn);
decrementBtn.addEventListener('click', onDecrementBtn);