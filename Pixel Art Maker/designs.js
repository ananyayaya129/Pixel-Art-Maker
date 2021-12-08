// Select color input
// Select size input
const colorSelect = document.getElementById('colorPicker');
const sizeSelect = document.getElementById('sizePicker');
const canvas = document.getElementById('pixelCanvas');

// Function to make Grid
// Coloring the selected cell by calling function
function makeGrid(height, width) {
    let grid = '';
    for (let r = 0; r < height; r++) {
        grid += '<tr class = "row-' + r + '">';
        for (let c = 0; c < width; c++) {
            grid += '<td class = "cell" id + "row-' + r + 'cell-' + c + '"></td>';
        }
        grid += '</tr>';
    }
    canvas.innerHTML = grid;
    coloringClickedCell();
};

// Function to color the selected cell
function coloringClickedCell() {
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener ("click", function(event) {
            event.target.style.backgroundColor = colorSelect.value;
        });
    };
};

// Making grid using the input of height and width
sizeSelect.onsubmit = function(event) {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
};