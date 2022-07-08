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
const erasebtn = document.querySelector('#erase');
const clearbtn = document.querySelector("#clear");
//colour picker global variable
let penColor = 'blackAndWhite';


//builds the base grid using slider default value
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

//changes grid size as slider value changes (also calls square colour choice)
gridSizeSlider.addEventListener("change", () => {
  grid.innerHTML = "";
  gridSize = gridSizeSlider.value;
  for (let i = 0; i < gridSize * gridSize; i++) {
    makeGrid(gridSize);
  };
  colorChooser();
});

//logic to change color as you mouse over each square
function colorChooser() {
  const square = document.querySelectorAll('.square');
  square.forEach(cell => {
    cell.count = 0.1;
    cell.addEventListener('mouseover', (e) => {
      if (penColor === 'blackAndWhite') {
        e.currentTarget.style.backgroundColor = `rgba(0, 0, 0,${cell.count})`;
        e.currentTarget.count += 0.1;
        e.currentTarget.classList.remove('neon-square');
      } else if (penColor === 'warm') {
        const warmColors = [
          'orange',
          "crimson",
          "orangered",
          "tomato",
          "coral",
          "gold",
          "darkorange",
          'yellow'
        ];
        let colorChoice = Math.floor(Math.random() * warmColors.length);
        e.currentTarget.style.backgroundColor = warmColors[colorChoice];
        e.currentTarget.classList.remove('neon-square');
        e.currentTarget.style.opacity = 1;
      } else if (penColor === 'cool'){
        const coolColors = [
          'cyan',
          "aquamarine",
          "mediumturqoise",
          "deepskyblue",
          "royalblue",
          "mediumslateblue",
          "cornflowerblue",
          'mediumaquamarine'
        ];
        let colorChoice = Math.floor(Math.random() * coolColors.length);
        e.currentTarget.style.backgroundColor = coolColors[colorChoice];
        e.currentTarget.classList.remove('neon-square');
        e.currentTarget.style.opacity = 1;
      } else if (penColor === 'neon') {
        const neonColors = [
          'violet',
          "magenta",
          "fuchsia",
          "orchid",
          "darkviolet",
        ];
        let colorChoice = Math.floor(Math.random() * neonColors.length);
        e.currentTarget.style.backgroundColor = neonColors[colorChoice];
        e.currentTarget.classList.add('neon-square');
        e.currentTarget.style.opacity = 1;
      } else if (penColor === 'white') {
        e.currentTarget.style.backgroundColor = 'white';
        e.currentTarget.classList.remove('neon-square')
        e.currentTarget.style.opacity = 1;
      }
    })
  });
};

//Click to chose colour
blackAndWhite.addEventListener("click", () => {
  penColor = 'blackAndWhite';
});

warmbtn.addEventListener("click", () => {
  penColor = 'warm';
});

coolbtn.addEventListener("click", () => {
  penColor = 'cool';
});

neonbtn.addEventListener("click", () => {
  penColor = 'neon';
});

erasebtn.addEventListener("click", () => {
  penColor = 'white';
});

//clears grid but keeps current size
clearbtn.addEventListener("click", () => {
  grid.innerHTML = "";
  for (let i = 0; i < gridSize * gridSize; i++) {
    makeGrid(gridSize);
  }
  colorChooser();
});

//loads basic grid on page load
window.addEventListener("load", () => {
  for (let i = 0; i < gridSize * gridSize; i++) {
    makeGrid(gridSize);
  }
  colorChooser();
  mobileColorChooser();
});


//rules for slider
for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
};

//logic to allow mobile users to draw


