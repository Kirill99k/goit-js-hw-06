const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

refs.input.addEventListener('input', handleInputChange);

function handleInputChange(event) {
    refs.text.style.fontSize = `${event.target.value }px`
}

