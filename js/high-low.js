"use strict";

var wantsToPlay = confirm('Would you like to play the high/low game?');

if (wantsToPlay) {
    var myNumber = Math.ceil(Math.random() * 100);
    var guess = +prompt("I'm thinking of a number from 1 to 100. Can you guess my number?");

    while (guess != myNumber) {
        if (guess < myNumber) {
            guess = +prompt('My number is higher. Guess again.');
        } else if (guess > myNumber) {
            guess = +prompt('My number is lower. Guess again.');
        }
    }

    alert('Yes! You guessed my number, ' + myNumber + '\n. Refresh to play again.');
} else {
    alert('No hard feelings. Goodbye.')
}