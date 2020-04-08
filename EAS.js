'use strict';

/* Global Variable Block */
var boxSquareCount = 16;
var etchDivs;

/* Runtime Start*/


/* Runtime End */


/**
 * Establishes basic CSS 
 * 
 */
function setUpCSS() {
    const etchCont = $('#etchContainer');
    etchCont.style.display = "grid";
    etchCont.style.width = "900";
}

function drawBoxes() {
    
    for(var i = 0; i < boxSquareCount; i++) {

    }
}

function $(n) { return document.querySelector(n); }