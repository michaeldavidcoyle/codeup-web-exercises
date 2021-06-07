"use strict";

// Prompt the user for an odd number between 1 and 50. Use a loop and a break
// statement to continue prompting the user if they enter invalid input.
var inputIsValid = true;
var userNumber;

while (inputIsValid) {
    userNumber = +prompt('Enter an odd number between 1 and 50');

    if (!isNaN(userNumber) && userNumber < 50 && userNumber > 0 && userNumber % 2 === 1) {
        break;
    }
}

// Use a loop and the continue statement to output all the odd numbers between
// 1 and 50, except for the number the user entered.
console.log('Number to skip is: ' + userNumber);
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