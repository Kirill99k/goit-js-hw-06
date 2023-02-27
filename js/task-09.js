'use strict';

const refs = {
  spanColor: document.querySelector('.color'),
  changeBtn: document.querySelector('.change-color'),
}

refs.changeBtn.addEventListener('click', handleChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function handleChangeColor() {
  let color = getRandomHexColor();
  refs.spanColor.textContent = color;
  document.body.style.background = color;
}