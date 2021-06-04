"use strict";

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

for (var i = 0; i < 10; i++) {
    var random = Math.floor(Math.random() * (200 - 20 + 1) + 20);

    if (random % 2 === 0) {
        console.log(random + ' is even');
    } else {
        console.log(random + ' is odd');
    }
}