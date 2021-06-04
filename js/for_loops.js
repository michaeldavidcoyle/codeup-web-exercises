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