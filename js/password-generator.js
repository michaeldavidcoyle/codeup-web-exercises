"use strict";

$(document).ready(function () {
    function lowerCountHandler() {
        lowerLength = +$(this).val();

        if (lowerLength < minTotalLength) {
            lowerLength = minTotalLength;
            lowerCount.attr('value', lowerLength);
        }

        if (passwordLength < maxTotalLength) {
            passwordLength = totalChars();
            lengthOutput.html(passwordLength);
        }

        while (totalChars() > passwordLength) {
            lowerLength -= 1;
            lowerCount.attr('value', lowerLength);
        }

        lowerOutput.html(lowerLength);
    }

    function upperCountHandler() {
        upperLength = +$(this).val();

        if (upperLength < minTotalLength) {
            upperLength = minTotalLength;
            upperCount.attr('value', upperLength);
        }

        if (passwordLength < maxTotalLength) {
            passwordLength = totalChars();
            lengthOutput.html(passwordLength);
        }

        while (totalChars() > passwordLength) {
            upperLength -= 1;
            upperCount.attr('value', upperLength);
        }

        upperOutput.html(upperLength);
    }

    function numbersCountHandler() {
        numbersLength = +$(this).val();

        if (numbersLength < minTotalLength) {
            numbersLength = minTotalLength;
            numbersCount.attr('value', numbersLength);
        }

        if (passwordLength < maxTotalLength) {
            passwordLength = totalChars();
            lengthOutput.html(passwordLength);
        }

        while (totalChars() > passwordLength) {
            numbersLength -= 1;
            numbersCount.attr('value', numbersLength);
        }

        numbersOutput.html(numbersLength);
    }

    function symbolsCountHandler() {
        symbolsLength = +$(this).val();

        if (symbolsLength < minTotalLength) {
            symbolsLength = minTotalLength;
            symbolsCount.attr('value', symbolsLength);
        }

        if (passwordLength < maxTotalLength) {
            passwordLength = totalChars();
            lengthOutput.html(passwordLength);
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

    const minTotalLength = 8;
    const maxTotalLength = 32;
    
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

    let passwordLength = minTotalLength;
    let lowerLength = passwordLength;
    let upperLength = 0;
    let numbersLength = 0;
    let symbolsLength = 0;

    lowerCount.attr('value', lowerLength);

    includeLower.change(() => {
        lowerFormGroup.toggleClass('d-none');

        if (lowerFormGroup.hasClass('d-none')) {
            lowerCount.attr('value', 0);
        } else {
            lowerCount.attr('value', lowerLength);
            lowerCount.attr('min', 1);
        }
    });

    includeUpper.change(() => {
        upperFormGroup.toggleClass('d-none');

        if (upperFormGroup.hasClass('d-none')) {
            upperCount.attr('value', 0);
        } else {
            upperCount.attr('value', 1);
            upperCount.attr('min', 1);
        }
    });

    includeNumbers.change(() => {
        numbersFormGroup.toggleClass('d-none');

        if (numbersFormGroup.hasClass('d-none')) {
            numbersCount.attr('value', 0);
        } else {
            numbersCount.attr('value', numbersLength);
            numbersCount.attr('min', 1);
        }
    });

    includeSymbols.change(() => {
        symbolsFormGroup.toggleClass('d-none');

        if (symbolsFormGroup.hasClass('d-none')) {
            symbolsCount.attr('value', 0);
        } else {
            symbolsCount.attr('value', symbolsLength);
            symbolsCount.attr('min', 1);
        }
    });
    
    lowerCount.change(lowerCountHandler);
    upperCount.change(upperCountHandler);
    numbersCount.change(numbersCountHandler);
    symbolsCount.change(symbolsCountHandler);
});