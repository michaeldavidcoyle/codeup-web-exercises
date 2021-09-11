"use strict";

$(document).ready(function () {
    function lengthHandler(event) {
        // console.log(this.value);
        passwordLength = +$(this).val();
        lengthOutput.html(passwordLength);
    }

    function lowerCountHandler() {
        lowerLength = +$(this).val();

        if (lowerLength < lengthInput.attr('min')) {
            lowerLength = +lengthInput.attr('min');
            lowerCount.attr('value', lowerLength);
        }

        if (passwordLength < lengthInput.attr("max")) {
            passwordLength = totalChars();
            lengthOutput.html(passwordLength);
            lengthInput.attr('value', passwordLength);
        }

        while (totalChars() > passwordLength) {
            lowerLength -= 1;
            lowerCount.attr('value', lowerLength);
        }

        lowerOutput.html(lowerLength);
    }

    function upperCountHandler() {
        upperLength = +$(this).val();

        if (upperLength < lengthInput.attr('min')) {
            upperLength = +lengthInput.attr('min');
            upperCount.attr('value', upperLength);
        }

        if (passwordLength < lengthInput.attr("max")) {
            passwordLength = totalChars();
            lengthOutput.html(passwordLength);
            lengthInput.attr('value', passwordLength);
        }

        while (totalChars() > passwordLength) {
            upperLength -= 1;
            upperCount.attr('value', upperLength);
        }

        upperOutput.html(upperLength);
    }

    function numbersCountHandler() {
        numbersLength = +$(this).val();

        if (numbersLength < lengthInput.attr('min')) {
            numbersLength = +lengthInput.attr('min');
            numbersCount.attr('value', numbersLength);
        }

        if (passwordLength < lengthInput.attr("max")) {
            passwordLength = totalChars();
            lengthOutput.html(passwordLength);
            lengthInput.attr('value', passwordLength);
        }

        while (totalChars() > passwordLength) {
            numbersLength -= 1;
            numbersCount.attr('value', numbersLength);
        }

        numbersOutput.html(numbersLength);
    }

    function symbolsCountHandler() {
        symbolsLength = +$(this).val();

        if (symbolsLength < lengthInput.attr('min')) {
            symbolsLength = +lengthInput.attr('min');
            symbolsCount.attr('value', symbolsLength);
        }

        if (passwordLength < lengthInput.attr("max")) {
            passwordLength = totalChars();
            lengthOutput.html(passwordLength);
            lengthInput.attr('value', passwordLength);
        }

        while (totalChars() > passwordLength) {
            symbolsLength -= 1;
            symbolsCount.attr('value', symbolsLength);
        }

        symbolsOutput.html(symbolsLength);
    }

    function totalChars() {
        return (+lowerLength) + (+upperLength) + (+numbersLength) + (+symbolsLength);
    }

    function revertLength(charLength) {
        while (totalChars() > passwordLength) {
            charLength -= 1;
        }

        return charLength;
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
    let lowerLength = passwordLength;
    let upperLength = 0;
    let numbersLength = 0;
    let symbolsLength = 0;

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