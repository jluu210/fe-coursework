document.querySelectorAll("td").forEach((cell) => {
  cell.textContent = getComputedStyle(cell).backgroundColor;
});
const colors = ["#e63946", "#457b9d", "#a8dadc"];
const cells = document.querySelectorAll("td");

cells.forEach((cell, index) => {
  cell.textContent = colors[index];
});
