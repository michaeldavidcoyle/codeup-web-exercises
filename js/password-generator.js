"use strict";

function lengthHandler(event) {
    // console.log(this.value);
    lengthOutput.html(this.value);
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

const lengthInput = $('#password-length');

const includeLower = $('#include-lower');
const includeUpper = $('#include-upper');
const includeNumbers = $('#include-numbers');
const includeSymbols = $('#include-symbols');

const lowerCount = $('#lower-count');
const upperCount = $('#upper-count');
const numbersCount = $('#numbers-count');
const symbolsCount = $('#symbols-count');

const lowerFormGroup = $('#lower-form-group');
const upperFormGroup = $('#upper-form-group');
const numbersFormGroup = $('#numbers-form-group');
const symbolsFormGroup = $('#symbols-form-group');

const lengthOutput = $('#length-output');
const lowerOutput = $('#lower-count-output');
const upperOutput = $('#upper-count-output');
const numbersOutput = $('#numbers-count-output');
const symbolsOutput = $('#symbols-count-output');

let passwordLength = 8;
let upperLength = 1;
let numbersLength = 1;
let symbolsLength = 2;

lengthInput.change(lengthHandler);