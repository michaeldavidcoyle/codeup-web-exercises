"use strict";

function numberToWords(number) {
    let groups = groupByThree(number).reverse();
    let words = [];

    groups.forEach((group, i) => {
        if (group > 0) {
            words.push(thousands[i], groupToWords(group));
        }
    });

    return words.reverse().join(' ');
}

function groupToWords(number) {
    let words = [];
    let lastTwo = number % 100;
    let first = (number - lastTwo) / 100;

    if (first > 0) {
        words.push(units[first], 'hundred');
    }

    if (lastTwo > 0) {
        words.push(twoDigits[lastTwo]);
    }

    return words.join(' ');
}

function groupByThree(number) {
    let groups = [];
    let digits = number.toString().split('');

    while (digits.length > 0) {
        groups.unshift(digits.splice(-3, 3).join(''));
    }

    return groups.map(group => +group);
}

const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const thousands = ['', ' thousand', ' million', ' billion', ' trillion', ' quadrillion'];

const twoDigits = units.slice(0).concat(teens);

for (let t = 2; t < 10; t++) {
    for (let u = 0; u < 10; u++) {
        let word = (u > 0) ? `${tens[t]}-${units[u]}` : tens[t];
        twoDigits.push(word);
    }
}

const numberInput = document.getElementById('number');
const output = document.getElementById('output');

numberInput.addEventListener('change', function() {
    output.innerText = numberToWords(this.value);
});