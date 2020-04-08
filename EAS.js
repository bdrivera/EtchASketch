'use strict';

/* Global Variable Block */
const etchCont = $('#etchContainer');
var boxSquareCount = 16;
var etchDivs;

/* Runtime Start*/
setUpCSS();

/* Runtime End */


/**
 * Establishes basic CSS 
 * 
 * @param {*} c element to have CSS changed
 */
function setUpCSS(c) {
    etchCont.style.display = "grid";
    etchCont.style.width = "900";
}

/**
 * Draws div boxes into specified element and applies eventListener
 * 
 * @param {*} c element to be drawn into
 */
function drawBoxes(c) {
    var gridPropertyString = "";
    for(var i = 0; i < boxSquareCount; i++) {
        propertyString += " auto";
    }
    propertyString += ";";
    c.style.gridTemplateColumns = gridPropertyString;

}


/**
 * Function that queries an inquiry and returns the element.
 * 
 * @param {*} n Element name  to be queried and returned
 */
function $(n) { return document.querySelector(n); }