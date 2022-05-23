'use strict';

const container = document.getElementById('container');
const gridColor = document.getElementsByClassName('grid');

function makeGrid (rows, cols) {
    container.style.setProperty('--rows', rows);
    container.style.setProperty('--cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let grid = document.createElement('div');
        container.appendChild(grid).className = 'grid';
    };
};

makeGrid(16, 16);

for (let i = 0; i < gridColor.length; i++) {
    gridColor[i].addEventListener('mouseover', function () {
        gridColor[i].style.backgroundColor = 'black';
    });
}