'use strict';

/* Global Variable Block */
const etchCont = $('#etchContainer');
var boxSquareCount = 16;
var etchContWidth = 900;
var etchDivs = new Array();

/* Runtime Start*/
setUpCSS(etchCont);
drawBoxes(etchCont);

/* Runtime End */


/**
 * Establishes basic CSS 
 * 
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
 * Draws div boxes and applies eventListener
 * 
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
        console.log(getEtchDivSide());

    }
    
}

function getEtchDivSide() {
    return (etchContWidth / boxSquareCount);
}

/**
 * Function that queries an inquiry and returns the element.
 * 
 * @param {*} n Element name  to be queried and returned
 */
function $(n) { return document.querySelector(n); }