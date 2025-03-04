const containerEl = document.querySelector(".container");
const gridChangeContEl = document.querySelector(".set-cells");
const gridInfoEl = document.getElementById("grid-info")
let drawing = false;
const inputColor = document.getElementById("pix-color");
let pixColor = '#000000'

const generateCells = (cells = 16) => {
  document.documentElement.style.setProperty("--cells", cells);
  gridInfoEl.textContent = `Grid is: ${cells}x${cells}`
  containerEl.replaceChildren(); //Removes all children before generating cells
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < cells; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < cells; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
    }
    fragment.appendChild(row);
  }

  containerEl.appendChild(fragment);
};
generateCells(); //when page is loaded 16x16 cells are genrated

const handleClose = (action = "none")=>{
  gridChangeContEl.style.display = action
}


// EVENTS
containerEl.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("cell")) {
    drawing = true;
    e.target.style.backgroundColor = pixColor;
  }
});

containerEl.addEventListener("mousemove", (e) => {
  if (drawing && e.target.classList.contains("cell")) {
    e.target.style.backgroundColor = pixColor;
  }
});

document.addEventListener("mouseup", () => {
  drawing = false;
});

gridChangeContEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("cell-amount");
  const gridSize = parseInt(input.value);
  generateCells(gridSize);
  handleClose()
});
inputColor.addEventListener("change",()=>{
  pixColor = inputColor.value
})