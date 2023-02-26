const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', handleInputBlur);

function handleInputBlur(event) {
    event.target.classList.remove('valid', 'invalid');
    const inputLength = inputEl.dataset.length;
    if (event.target.value.length === parseInt(inputLength)) {
        event.target.classList.add('valid');
    } else {
        event.target.classList.add('invalid');
    }
};

