"use strict";

var inputIsValid = true;
var input;

while (inputIsValid) {
    input = +prompt('Enter an odd number between 1 and 50');

    if (!isNaN(input) && input % 2 === 1) {
        break;
    }
}

console.log('Yay!');