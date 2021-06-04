"use strict";

var inputIsValid = true;
var userNumber;

while (inputIsValid) {
    userNumber = +prompt('Enter an odd number between 1 and 50');

    if (!isNaN(input) && userNumber % 2 === 1) {
        break;
    }
}

console.log('Yay!');