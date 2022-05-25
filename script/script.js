'use strict';

const container = document.getElementById('container');
const gridColor = document.getElementsByClassName('grid');
const randomColorbutton = document.getElementsByClassName('button change-random');
const buttonRandom = document.getElementById('random-rgba');
const buttonBlack = document.getElementById('black');
const erase = document.getElementById('eraser');
const clear = document.getElementById('clear');
const gridButton = document.getElementById('size')


makeGrid(16);
gridSize(16,16);


function makeGrid (size) {
    for (let i = 0; i < (size * size); i++) {
        let grid = document.createElement('div');
        container.appendChild(grid).className = 'grid';
    };
}


function gridSize (rows, cols) {
    container.style.setProperty('--rows', rows);
    container.style.setProperty('--cols', cols);
}

function changeSize() {
    let num = prompt('Choose a number between 0 - 100');
    console.log(num);
    clearGrid();
    gridSize(num, num);
    makeGrid(num);
    

}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
}

gridButton.addEventListener('click', changeSize);

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


for (let i = 0; i < randomColorbutton.length; i++) {
        randomColorbutton[i].addEventListener('mouseover', function() {
            let o = Math.round;
            let r = Math.random;
            let s = 255;
            let color = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
            randomColorbutton[i].style.backgroundColor = color;
        });
        randomColorbutton[i].addEventListener('mouseout', function () {
            randomColorbutton[i].style.backgroundColor = 'white';
        })
}
 