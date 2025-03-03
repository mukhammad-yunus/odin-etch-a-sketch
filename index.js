const containerEl = document.querySelector(".container");
let drawing = false;

const generateCells = (cells = 16) => {
  document.documentElement.style.setProperty("--cells", cells);
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

// EVENTS
containerEl.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("cell")) {
    drawing = true;
    e.target.style.backgroundColor = "black";
  }
});

containerEl.addEventListener("mousemove", (e) => {
  if (drawing && e.target.classList.contains("cell")) {
    e.target.style.backgroundColor = "black";
  }
});

document.addEventListener("mouseup", () => {
  drawing = false;
});

document.querySelector(".set-cells").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("cell-amount");
  const gridSize = parseInt(input.value);
  generateCells(gridSize);
});
