

function makeGrid() {
  let grid = document.querySelector(".grid-container");
  let box = document.createElement("div");
  box.style.border = "0.1rem solid black";
  box.style.width = "auto";
  box.style.height = "auto";
  grid.appendChild(box);
};
let count = 4096;

for(let i = 0; i < count; i++) {
  makeGrid()
}
