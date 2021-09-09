"use strict";

function lengthHandler(event) {
    // console.log(this.value);
    lengthOutput.innerText = this.value;
    passwordLength = this.value;
}

const CHARS = {
    lower: [],
    upper: [],
    numbers: [],
    symbols: []
}

for (let charCode = 33; charCode < 127; charCode++) {
    let char = String.fromCharCode(charCode);

    if (/[a-z]/.test(char)) {
        CHARS.lower.push(char);
    } else if (/[A-Z]/.test(char)) {
        CHARS.upper.push(char);
    } else if (/[0-9]/.test(char)) {
        CHARS.numbers.push(char);
    } else {
        CHARS.symbols.push(char);
    }
}

const lengthInput = document.getElementById('password-length');

const includeLower = document.getElementById('include-lower');
const includeUpper = document.getElementById('include-upper');
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');

const lowerCount = document.getElementById('lower-count');
const upperCount = document.getElementById('upper-count');
const numbersCount = document.getElementById('numbers-count');
const symbolsCount= document.getElementById('symbols-count');

const lengthOutput = document.getElementById('length-output');
const lowerOutput = document.getElementById('lower-count-output');
const upperOutput = document.getElementById('upper-count-output');
const numbersOutput = document.getElementById('numbers-count-output');
const symbolsOutput = document.getElementById('symbols-count-output');

let passwordLength = 8;
let upperLength = 1;
let numbersLength = 1;
let symbolsLength = 2;

lengthInput.addEventListener('change', lengthHandler);