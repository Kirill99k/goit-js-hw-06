function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputCollection: document.querySelector('#controls').firstElementChild,
  btnCreate: document.querySelector("[data-create]"),
  btmDestroy: document.querySelector("[data-destroy]"),
  divBoxes: document.querySelector("#boxes"),
};

refs.divBoxes.setAttribute(
  "style",
  "display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 10px;"
);

refs.btnCreate.addEventListener("click", () =>
  createBoxes(refs.inputCollection.value)
);
refs.btmDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const size = 50 + i * 10;
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.fontSize = `${size / 4}px`;
    boxes.push(box);
  }
  refs.divBoxes.append(...boxes);
}

function destroyBoxes() {
  refs.divBoxes.innerHTML = "";
}
