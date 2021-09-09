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
const lowerInput = document.getElementById('include-lower');
const upperInput = document.getElementById('include-upper');
const numbersInput = document.getElementById('include-numbers');
const symbolsInput = document.getElementById('include-symbols');

const lengthOutput = document.getElementById('length-output');

let passwordLength = 8;
let upperCount = 1;
let numbersCount = 1;
let symbolsCount = 2;

lengthInput.addEventListener('change', lengthHandler);