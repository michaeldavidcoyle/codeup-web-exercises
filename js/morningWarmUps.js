"use strict";

// Create a function named countSpaces that accepts a string and returns
//  the total number of spaces in the string.

// Add validation to function, if the argument pass is not a string
//  it should return false.

function countSpaces(string) {
    if (typeof string !== 'string') return false;
    var count = 0;
    for (let index = 0; index < string.length; index++) {
        if (string[index] == ' ') count++;
    }

    return count;
}

