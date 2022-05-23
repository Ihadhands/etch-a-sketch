'use strict';

const container = document.getElementById('container');

function makeGrid (rows, cols) {
    container.style.setProperty('--rows', rows);
    container.style.setProperty('--cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let grid = document.createElement('div');
        container.appendChild(grid).className = 'grid';
    };
};

makeGrid(16, 16);