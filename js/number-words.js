"use strict";

function groupToWords(number) {
    let words = '';
    let lastTwo = number % 100;
    let first = (number - lastTwo) / 100;

    if (first > 0) {
        words += `${units[first]} hundred`;
    }

    if (lastTwo > 0) {
        words += ` ${twoDigits[lastTwo]}`;
    }

    return words;
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
const twoDigits = units.slice(0).concat(teens);

for (let t = 2; t < 10; t++) {
    for (let u = 0; u < 10; u++) {
        let word = (u > 0) ? `${tens[t]}-${units[u]}` : tens[t];
        twoDigits.push(word);
    }
}