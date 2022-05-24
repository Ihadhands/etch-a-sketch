'use strict';

const container = document.getElementById('container');
const gridColor = document.getElementsByClassName('grid');
const buttonRandom = document.getElementById('random-rgba');
const buttonBlack = document.getElementById('black');


function makeGrid (rows, cols) {
    container.style.setProperty('--rows', rows);
    container.style.setProperty('--cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let grid = document.createElement('div');
        container.appendChild(grid).className = 'grid';
    };
};

makeGrid(16, 16);


/*function colorChangeBlack () {
    for (let i = 0; i < gridColor.length; i++) {
        gridColor[i].addEventListener('mouseover', function () {
            gridColor[i].style.backgroundColor = 'black';
        });
    };
    true;
}*/

/*function colorChangeRandom () {

    for (let i = 0; i < gridColor.length; i++) {
        gridColor[i].addEventListener('mouseover', function () {
            let o = Math.round;
            let r = Math.random;
            let s = 255;
            let color = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
            gridColor[i].style.backgroundColor = color;
        });
    };
}*/

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