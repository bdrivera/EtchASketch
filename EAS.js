'use strict';

/* Global Variable Block */
const etchCont = $('#etchContainer'); //constant for board div
const etchButt = $('#etchButtonContainer'); //constant for buttons div
var boxSquareCount = 16; //length of one side of the board in blocks
var etchContWidth = 700; //width in pixels of the board container
var etchDivs = new Array(); //array holding board blocks objects

var neutralColor = "black";
var offsetColor = "white";

/*
 * The effect to be applied when hovering over a block.
 *   0=Draw
 *   1=Erase
 *   2=Gradient
 *   3=Random
 */
var activeEffectId = 0;

/* Runtime Start*/
setUpCSS();
drawBoxes();
addButtonListeners();
addBoardListeners();

/* Runtime End */


/**
 * Establishes basic CSS for Etch-A-Sketch
 */
function setUpCSS() {
    //CSS for board
    etchCont.style.display = "flex";
    etchCont.style.flexWrap = "wrap";
    etchCont.style.margin = "0 auto";
    etchCont.style.textAlign = "center";
    etchCont.style.width = etchContWidth + "px";
    etchCont.style.height = etchContWidth + "px";
}

/**
 * Draws div boxes on the board
 */
function drawBoxes() {

    for(var i = 0; i < (boxSquareCount * boxSquareCount); i++) {
        etchDivs[i] = document.createElement('div');
        etchDivs[i].classList.add('etchBox' + i);
        etchDivs[i].style.backgroundColor = neutralColor;
        etchDivs[i].style.opacity = "1";
        etchDivs[i].style.color = "white";
        etchDivs[i].style.height = getEtchDivSide();
        etchDivs[i].style.width = getEtchDivSide();
        etchCont.appendChild(etchDivs[i]);
    }
}

/**
 * Removes div boxes to prepare to redraw
 */
function removeBoxes() {
    for(var i = 0; i < (boxSquareCount * boxSquareCount); i++) {
        etchCont.removeChild(etchDivs[i]);
    }
}

/**
 * Adds event listeners to all boxes used to control the
 * etch-a-sketch board
 */
function addButtonListeners() {
    const butts = document.querySelectorAll('button');
    butts.forEach((button) => {
        button.addEventListener('click',
            function(e) {
                buttonEvent(e.target);
            });
    });
}

/**
 * Adds event listeners to all div boxes in the etch-a-sketch board
 */
function addBoardListeners() {
    for(var i = 0; i < (boxSquareCount * boxSquareCount); i++) {
        etchDivs[i].addEventListener('mouseenter',
            function(e) {
                boardEvent(e.target);
            });
    }
}

/**
 * Uses provided parameter to execute button event
 * @param {*} b target button
 */
function buttonEvent(b) {
    switch(b.id) {
        case "buttClear": //Clear
            clearBoard();
        return;
        case "buttDraw": //Draw
            activeEffectId = 0;
        return;
        case "buttGrad": //Gradient
            activeEffectId = 2;
        return;
        case "buttRan": //Random
            activeEffectId = 3;
        return;
        case "buttErase": //Erase
            activeEffectId = 1;
        return;
        case "buttResize": //Resize
            removeBoxes();
            boxSquareCount = parseInt($("#inputResize").value);
            drawBoxes();
            addBoardListeners();
        return;
    }
}

/**
 * Uses provided paramater to execute an event
 * @param {*} d target div
 */
function boardEvent(d) {
    switch(activeEffectId) {
        case 0: //Draw
            d.style.backgroundColor = offsetColor;
            d.style.opacity = 1;
        return;
        case 1: //Erase
            d.style.backgroundColor = neutralColor;
            d.style.opacity = 1;
        return;
        case 2: //Gradient
            d.style.opacity = (parseFloat(d.style.opacity) - .2) + "";
        return;
        case 3: //Random
            d.style.backgroundColor = "rgb(" +
                getRandomByte() + ", " + getRandomByte() + ", " + 
                    getRandomByte() + ")";
            d.style.opacity = 1;
        return;
    }
}

/**
 * Clears the board back to it's neutral color
 */
function clearBoard() {
    for(var i = 0; i < (boxSquareCount*boxSquareCount); i++) {
        etchDivs[i].style.backgroundColor = neutralColor;// neutralColor;
        etchDivs[i].style.opacity = 1;
    }
}

/**
 * Returns a value between 0 and 255
 */
function getRandomByte() {
    return Math.floor(Math.random() * 255);
}

/**
 * Returns the proper side length for board blocks using CSS calc() method
 */
function getEtchDivSide() {
    return "calc(100% / " + boxSquareCount + ")";
}

/**
 * Function that queries an inquiry and returns the element.
 * @param {*} n Element name  to be queried and returned
 */
function $(n) { return document.querySelector(n); }