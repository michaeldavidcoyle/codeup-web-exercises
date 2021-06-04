"use strict";

var inputIsValid = true;
var userNumber;

while (inputIsValid) {
    userNumber = +prompt('Enter an odd number between 1 and 50');

    if (!isNaN(userNumber) && userNumber % 2 === 1) {
        break;
    }
}

for (var i = 1; i < 50;  i++) {
    if (i % 2 === 0) {
        continue;
    }

    if (i === userNumber) {
        console.log('Yikes! Skipping number: ' + userNumber);
        continue;
    }

    console.log('Here is an odd number: ' + i);
}