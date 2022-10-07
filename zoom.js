/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *
 *    Assignment 3
 *    Author: Hil Patel
 *    Student ID:301215094
 *    Date: 


 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */

var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
    document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
    createEventListener();
}

/* close window */
function closeWin() {
    
        window.close();
    }

function AddFav() {
    
        window.opener.addFavourite(figFilename);
    }

function alertFav() {
    alert("You cannot add more than five favourites!");
    return false;
}
        
/* create event listener*/
function createEventListener() {
    var closeWindowDiv = document.getElementsByTagName("p")[0];
    if (closeWindowDiv.addEventListener) {
        closeWindowDiv.addEventListener("click", closeWin, false);
    } else if (closeWindowDiv.attachEvent) {
        closeWindowDiv.attachEvent("onclick", closeWin);
    }

    var addFavEvent = document.getElementsByTagName("p")[1];
    if (addFavEvent.addEventListener) {
        addFavEvent.addEventListener("click", AddFav, false);
    } else if (addFavEvent.attachEvent) {
        addFavEvent.attachEvent("onclick", AddFav);
    }

}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;