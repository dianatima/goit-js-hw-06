const input = document.querySelector('#validation-input');

const onInputBlur = (event) => {
    event.currentTarget.value.trim().length === Number(input.dataset.length) ? input.classList.add('valid') : input.classList.add('invalid');  
};

input.addEventListener('blur', onInputBlur);