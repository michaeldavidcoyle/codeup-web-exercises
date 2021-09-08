"use strict";

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


