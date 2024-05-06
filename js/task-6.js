function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input[type=number]");
const creatBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

creatBtn.addEventListener("click", () => {
  const amount = input.value;
  if (amount < 1 || amount > 100) {
    return;
  }
  createBoxes(amount);
  input.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);
function createBoxes(amount) {
  const boxes = [];
  const boxSize = 30;
  divBoxes.innerHTML = "";

  for(let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = boxSize + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    
  }
  divBoxes.append(...boxes);
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}


