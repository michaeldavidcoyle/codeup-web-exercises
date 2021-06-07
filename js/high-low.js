"use strict";

var wantsToPlay = confirm('Would you like to play the high/low game?');

if (wantsToPlay) {
    var myNumber = Math.ceil(Math.random() * 100);
    var guess = +prompt("I'm thinking of a number from 1 to 100. Can you guess my number?");

    console.log(guess);
} else {
    alert('No hard feelings. Goodbye.')
}