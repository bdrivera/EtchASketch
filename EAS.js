'use strict';

/* Global Variable Block */
const etchCont = $('#etchContainer');
var boxSquareCount = 16;
var etchContWidth = 900;
var etchDivs = new Array();
var effectId = 0;

/* Runtime Start*/
setUpCSS();
drawBoxes();
addEventListeners();

/* Runtime End */


/**
 * Establishes basic CSS 
 */
function setUpCSS() {
    etchCont.style.display = "flex";
    etchCont.style.flexWrap = "wrap";
    etchCont.style.margin = "0px";
    etchCont.style.textAlign = "center";
    etchCont.style.width = etchContWidth + "px";
    etchCont.style.height = etchContWidth + "px";
}

/**
 * Draws div boxes
 */
function drawBoxes() {

    for(var i = 0; i < (boxSquareCount * boxSquareCount); i++) {
        etchDivs[i] = document.createElement('div');
        etchDivs[i].classList.add('content');
        etchDivs[i].textContent = i;
        etchDivs[i].style.backgroundColor = "black";
        etchDivs[i].style.color = "white";
        etchDivs[i].style.height = getEtchDivSide() + "px";
        etchDivs[i].style.width = getEtchDivSide() + "px";
        etchCont.appendChild(etchDivs[i]);
    }
    
}

/**
 * Adds event listeners to all div boxes in the etch-a-sketch
 */
function addEventListeners() {
    for(var i = 0; i < (boxSquareCount * boxSquareCount); i++) {
        etchDivs[i].addEventListener('mouseenter',
            function(e){
                eventEffect(e.target);
            });
    }
}

/**
 * Uses provided paramater to execute an event
 * @param {*} d 
 */
function eventEffect(d) {
    console.log("triggered: " + d.textContent);
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