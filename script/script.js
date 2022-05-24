'use strict';

const container = document.getElementById('container');
const gridColor = document.getElementsByClassName('grid');
const buttonRandom = document.getElementById('random-rgba');
const buttonBlack = document.getElementById('black');
const erase = document.getElementById('eraser');
const clear = document.getElementById('clear');

function makeGrid (rows, cols) {
    container.style.setProperty('--rows', rows);
    container.style.setProperty('--cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let grid = document.createElement('div');
        container.appendChild(grid).className = 'grid';
    };
};

makeGrid(16, 16);

buttonBlack.addEventListener('click', function () {
    for (let i = 0; i < gridColor.length; i++) {
        gridColor[i].addEventListener('mouseover', function () {
            gridColor[i].style.backgroundColor = 'black';
        });
    };
});


buttonRandom.addEventListener('click', function () {
    for (let i = 0; i < gridColor.length; i++) {
        gridColor[i].addEventListener('mouseover', function () {
            let o = Math.round;
            let r = Math.random;
            let s = 255;
            let color = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
            gridColor[i].style.backgroundColor = color;
        });
    };
});

erase.addEventListener('click', function () {
    for (let i = 0; i < gridColor.length; i++) {
        gridColor[i].addEventListener('mouseover', function () {
            gridColor[i].style.backgroundColor = 'rgba(255, 255, 255, 0.411)';
        });
    };
})

clear.addEventListener('click', function () {
    for (let gridColors of gridColor) {
        gridColors.style.backgroundColor = 'rgba(255, 255, 255, 0.411)';
    }
})