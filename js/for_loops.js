"use strict";

/*
 Create a function named showMultiplicationTable that accepts
 a number and console.logs the multiplication table for that
 number (just multiply by the numbers 1 through 10)
*/
function showMultiplicationTable(integer) {
    var table = '',
        product;

    for (var i = 1; i <= 10; i++) {
        product = integer * i;
        table += integer + ' x ' + i + ' = ' + product + "\n";
    }

    console.log(table);
}

// display results of calling showMultiplicationTable
for (var i = 1; i <= 10; i++) {
    showMultiplicationTable(i);
}

/*
 Use a for loop and the code from the previous lessons to generate
 10 random numbers between 20 and 200 and output to the console
 whether each number is odd or even.
*/
for (var i = 0; i < 10; i++) {
    var random = Math.floor(Math.random() * (200 - 20 + 1) + 20);

    if (random % 2 === 0) {
        console.log(random + ' is even');
    } else {
        console.log(random + ' is odd');
    }
}