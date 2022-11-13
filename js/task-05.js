const input = document.querySelector('#name-input');

const output = document.querySelector('#name-output');

const onInput = (event) =>{
  output.textContent = event.currentTarget.value.trim();
}; 

input.addEventListener('input', onInput);