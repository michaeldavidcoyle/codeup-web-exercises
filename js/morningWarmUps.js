"use strict";

// Create a function named countSpaces that accepts a string and returns
//  the total number of spaces in the string.

function countSpaces(string) {
    var count = 0;
    for (let index = 0; index < string.length; index++) {
        if (string[index] == ' ') count++;
    }

    return count;
}

// TODO: Add validation to function above, if the argument pass is not a string
//  it should return false.