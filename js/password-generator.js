"use strict";

$(document).ready(function () {
    function generatePassword() {
        let chars = [],
            char;

        let counts = {
            lower: lowerLength,
            upper: upperLength,
            numbers: numbersLength,
            symbols: symbolsLength
        }

        function addCharacter(charGroup) {
            char = randomArrayElement(charGroup);
            chars.push(char);
        }

        while (chars.length < passwordLength) {
            if (counts.lower > 0) {
                addCharacter(CHARS.lower);
                counts.lower--;
            }

            if (counts.upper > 0) {
                addCharacter(CHARS.upper);
                counts.upper--;
            }

            if (counts.numbers > 0) {
                addCharacter(CHARS.numbers);
                counts.numbers--;
            }

            if (counts.symbols > 0) {
                addCharacter(CHARS.symbols);
                counts.symbols--;
            }
        }

        $('#generated-password').html(shuffle(chars).join(''));
    }

    // Fisher-Yates shuffle, as demonstrated at https://bost.ocks.org/mike/shuffle/
    function shuffle(array) {
        let length = array.length,
            index,
            temp;

        while (length > 0) {
            index = Math.floor(Math.random() * length--);
            temp = array[length];
            array[length] = array[index];
            array[index] = temp;
        }

        return array;
    }

    function randomArrayElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function lowerCountHandler() {
        lowerLength = +$(this).val();

        while (totalChars() < minTotalLength) {
            lowerLength += 1;
        }

        while (totalChars() > maxTotalLength) {
            lowerLength -= 1;
        }

        lowerCount.attr('value', lowerLength);

        passwordLength = totalChars();
        lengthOutput.html(passwordLength);
    }

    function upperCountHandler() {
        upperLength = +$(this).val();

        while (totalChars() < minTotalLength) {
            upperLength += 1;
        }

        while (totalChars() > maxTotalLength) {
            upperLength -= 1;
        }

        upperCount.attr('value', upperLength);

        passwordLength = totalChars();
        lengthOutput.html(passwordLength);
    }

    function numbersCountHandler() {
        numbersLength = +$(this).val();

        while (totalChars() < minTotalLength) {
            numbersLength += 1;
        }

        while (totalChars() > maxTotalLength) {
            numbersLength -= 1;
        }

        numbersCount.attr('value', numbersLength);

        passwordLength = totalChars();
        lengthOutput.html(passwordLength);
    }

    function symbolsCountHandler() {
        symbolsLength = +$(this).val();

        while (totalChars() < minTotalLength) {
            symbolsLength += 1;
        }

        while (totalChars() > maxTotalLength) {
            symbolsLength -= 1;
        }

        symbolsCount.attr('value', symbolsLength);

        passwordLength = totalChars();
        lengthOutput.html(passwordLength);
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

    let passwordLength = minTotalLength;
    let lowerLength = passwordLength;
    let upperLength = 0;
    let numbersLength = 0;
    let symbolsLength = 0;

    lowerCount.attr('value', lowerLength);

    lengthOutput.html(passwordLength);

    includeLower.change(() => {
        lowerFormGroup.toggleClass('d-none');

        lowerLength = (lowerFormGroup.hasClass('d-none')) ? 0 : 1;
        passwordLength = totalChars();

        lowerCount.attr('min', lowerLength);
        lowerCount.attr('value', lowerLength);

        lengthOutput.html(passwordLength);
    });

    includeUpper.change(() => {
        upperFormGroup.toggleClass('d-none');

        upperLength = (upperFormGroup.hasClass('d-none')) ? 0 : 1;
        passwordLength = totalChars();

        upperCount.attr('min', upperLength);
        upperCount.attr('value', upperLength);

        lengthOutput.html(passwordLength);
    });

    includeNumbers.change(() => {
        numbersFormGroup.toggleClass('d-none');

        numbersLength = (numbersFormGroup.hasClass('d-none')) ? 0 : 1;
        passwordLength = totalChars();

        numbersCount.attr('min', numbersLength);
        numbersCount.attr('value', numbersLength);

        lengthOutput.html(passwordLength);
    });

    includeSymbols.change(() => {
        symbolsFormGroup.toggleClass('d-none');

        symbolsLength = (symbolsFormGroup.hasClass('d-none')) ? 0 : 1;
        passwordLength = totalChars();

        symbolsCount.attr('min', symbolsLength);
        symbolsCount.attr('value', symbolsLength);

        lengthOutput.html(passwordLength);
    });
    
    lowerCount.change(lowerCountHandler);
    upperCount.change(upperCountHandler);
    numbersCount.change(numbersCountHandler);
    symbolsCount.change(symbolsCountHandler);

    $('#generate-btn').click(generatePassword);
});