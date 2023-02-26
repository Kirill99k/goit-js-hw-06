const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}


refs.nameInput.addEventListener('input', handleInputChange);

function handleInputChange(event) {
    refs.nameOutput.textContent = event.target.value.trim() === '' ? 'Anonymous' : event.target.value;
}

