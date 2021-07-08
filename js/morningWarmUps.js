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
// Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]
function capitalizeAllNames(stringsArray) {
    var allCapsArray = [];

    stringsArray.forEach(function(string) {
        allCapsArray.push(string.toUpperCase());
    });

    return allCapsArray;
}

console.log('ALL CAPS');
console.log(capitalizeAllNames(["bob","Seth","TOFU","Toyota"]));

function capitalizeFirstLetter(stringsArray) {
    var capitalizedArray = [];

    stringsArray.forEach(function(string) {
        var capitalized = string[0].toUpperCase() + string.slice(1).toLowerCase();
        capitalizedArray.push(capitalized);
    });

    return capitalizedArray;
}

console.log('Capitalized');
console.log(capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]));

// July 7th 2021
// Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
var personOne = {
    firstName: "silvia",
    lastName: "floopertan",
    ageInYears: 34,
    heightInInches: 65,
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}
console.log('personOne full name: ' + personOne.getFullName());

// Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

var personTwo = {
    firstName: "dan",
    lastName: "valdarez",
    ageInYears: 61,
    heightInInches: 73,
    getNicelyFormattedFullName: function() {
        return capitalize(this.firstName) + ' ' + capitalize(this.lastName);
    }
}
console.log('nicely formatted full name: ' + personTwo.getNicelyFormattedFullName());

// Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62,
    getNicelyFormattedFullName: function() {
        return capitalize(this.firstName) + ' ' + capitalize(this.lastName);
    },
    intro: function() {
        return 'Hello, my name is ' + this.getNicelyFormattedFullName() + ' and I am ' + this.ageInYears + ' years old'
    }
}

console.log(personThree.intro());