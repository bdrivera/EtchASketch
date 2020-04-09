'use strict';

/* Global Variable Block */
const etchCont = $('#etchContainer'); //constant for board div
const etchButt = $('#etchButtonContainer'); //constant for buttons div
var boxSquareCount = 16; //length of one side of the board in blocks
var etchContWidth = 900; //width in pixels of the board container
var etchDivs = new Array(); //array holding board blocks objects

var neutralColor = "black";
var offsetColor = "white";

/*
 * The effect to be applied when hovering over a block.
 *   0=Black
 *   1=White
 *   2=Gradient
 *   3=Random
 */
var activeEffectId = 1;

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
    etchCont.style.margin = "0px";
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
        etchDivs[i].textContent = i;
        etchDivs[i].style.backgroundColor = "black";
        etchDivs[i].style.color = "white";
        etchDivs[i].style.height = getEtchDivSide() + "px";
        etchDivs[i].style.width = getEtchDivSide() + "px";
        etchCont.appendChild(etchDivs[i]);
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
    console.log(b.value);
    switch(b.value) {
        case 0: case "0": //Clear
            clearBoard();
        return;
        case 1: case "1": //Draw

        return;
        case 2 : case "2": //Gradient

        return;
        case 3: case "3": //Random

        return;
        case 4: case "4": //Erase

        return;
    }
}

/**
 * Uses provided paramater to execute an event
 * @param {*} d target div
 */
function boardEvent(d) {//TODO
    console.log("triggered: " + d.textContent);
    switch(activeEffectId) {
        case 0: //Black
            d.style.backgroundColor = "black";
        return;
        case 1: //White
            d.style.backgroundColor = "white";
        return;
        case 2: //Gradient

        return;
        case 3: //Random

        return;
    }
}

function clearBoard() {
    for(var i = 0; i < (boxSquareCount*boxSquareCount); i++) {
        etchDivs[i].style.backgroundColor = "black";// neutralColor;
        etchCont.appendChild(etchDivs[i]);
    }
}

/**
 * Returns the size for a etch div side based on
 * the size of the container and etch div count
 */
function getEtchDivSide() {
    return (etchContWidth / boxSquareCount);
}

/**
 * Function that queries an inquiry and returns the element.
 * @param {*} n Element name  to be queried and returned
 */
function $(n) { return document.querySelector(n); }