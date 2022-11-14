const input = document.querySelector('#name-input');

const output = document.querySelector('#name-output');

const onInput = (event) =>{
  output.textContent = event.currentTarget.value.trim();
  if (!output.textContent) {
    output.textContent = 'Anonymous';
  }
}; 

input.addEventListener('input', onInput);
