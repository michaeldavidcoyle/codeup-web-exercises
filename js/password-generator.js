"use strict";

$(document).ready(function () {
    function lengthHandler(event) {
        // console.log(this.value);
        lengthOutput.html($(this).val());
        passwordLength = $(this).val();
    }

    function lowerCountHandler() {
        lowerOutput.html($(this).val());
        lowerLength = $(this).val();
    }

    function upperCountHandler() {
        upperOutput.html($(this).val());
        upperLength = $(this).val();
    }

    function numbersCountHandler() {
        numbersOutput.html($(this).val());
        numbersLength = $(this).val();
    }

    function symbolsCountHandler() {
        symbolsOutput.html($(this).val());
        symbolsLength = $(this).val();
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
    let lowerLength = 5;
    let upperLength = 1;
    let numbersLength = 1;
    let symbolsLength = 1;

    includeLower.change(() => lowerFormGroup.toggleClass("d-none"));
    includeUpper.change(() => upperFormGroup.toggleClass("d-none"));
    includeNumbers.change(() => numbersFormGroup.toggleClass("d-none"));
    includeSymbols.change(() => symbolsFormGroup.toggleClass("d-none"));

    lengthInput.change(lengthHandler);
    lowerCount.change(lowerCountHandler);
    upperCount.change(upperCountHandler);
    numbersCount.change(numbersCountHandler);
    symbolsCount.change(symbolsCountHandler);
});