let gridSizeSlider = document.querySelector("#grid-size")
let gridSize = gridSizeSlider.value
let grid = document.querySelector(".grid-container");



function makeGrid() {
  let box = document.createElement("div");
  box.style.border = '0.5px solid black';
  box.style.width = "auto";
  box.style.height = "auto";
  grid.appendChild(box);
};

grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

for(let i = 0; i < gridSize * gridSize; i++) {
  makeGrid()
}
