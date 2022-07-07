//global variables and DOM nodes
//grid
const gridSizeSlider = document.querySelector("#grid-size");
let gridSize = gridSizeSlider.value;
const grid = document.querySelector(".grid-container");
//buttons
const blackAndWhite = document.querySelector("#black-and-white");
const warmbtn = document.querySelector("#warm");
const coolbtn = document.querySelector("#cool");
const neonbtn = document.querySelector("#neon");
const clearbtn = document.querySelector("#clear");

function makeGrid(gridSize) {
  let box = document.createElement("div");
  box.classList.add("square");
  box.style.border = "0.5px solid rgba(0,0,0,0.5)";
  box.style.width = "auto";
  box.style.height = "auto";
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  grid.appendChild(box);
}

//changes grid size as slider value changes
gridSizeSlider.addEventListener("change", () => {
  grid.innerHTML = "";
  gridSize = gridSizeSlider.value;
  for (let i = 0; i < gridSize * gridSize; i++) {
    makeGrid(gridSize);
  }
});

//Click to activate black & white button
blackAndWhite.addEventListener("click", () => {
  let square = document.querySelectorAll('.square');
  let shadeColors = [
    'snow',
    "gainsboro",
    "lightgray",
    "silver",
    "darkgray",
    "gray",
    "dimgray",
    'black'
  ];
  square.forEach((cell) =>
    cell.addEventListener("mouseenter", (e) => {
      let colorChoice = Math.floor(Math.random() * shadeColors.length);
      e.currentTarget.style.backgroundColor = shadeColors[colorChoice];
    })
  );
});

//clears grid but keeps current size
clearbtn.addEventListener("click", () => {
  grid.innerHTML = "";
  for (let i = 0; i < gridSize * gridSize; i++) {
    makeGrid(gridSize);
  }
});

//loads basic grid on page load
window.addEventListener("load", () => {
  for (let i = 0; i < gridSize * gridSize; i++) {
    makeGrid(gridSize);
  }
});
