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

// tests
var string = ' ';
console.log('tests for countSpaces function:');
console.log('string: "' + string + '" has: ' + countSpaces(string) + ' spaces.');

string = ' '.repeat(3);
console.log('string: "' + string + '" has: ' + countSpaces(string) + ' spaces.');

string = '. '.repeat(7);
console.log('string: "' + string + '" has: ' + countSpaces(string) + ' spaces.');

string = ' 1, 2, 3, 4';
console.log('string: "' + string + '" has: ' + countSpaces(string) + ' spaces.');

string = 'The quick brown fox jumps over the lazy dog.';
console.log('string: "' + string + '" has: ' + countSpaces(string) + ' spaces.');

// July 6th 2021
// Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]
// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]
function capitalizeAllNames(stringsArray) {
    var allCapsArray = [];

    stringsArray.forEach(function(string) {
        allCapsArray.push(string.toUpperCase());
    });

    return allCapsArray;
}

console.log(capitalizeAllNames(["bob","Seth","TOFU","Toyota"]));