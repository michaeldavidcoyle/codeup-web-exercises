"use strict";

var wantsToPlay = confirm('Would you like to play the high/low game?');

if (wantsToPlay) {
    do {
        var max = parseInt(prompt('Enter a maximum number (whole numbers only please).\nThe higher the number, the longer the game.'));
    } while (isNaN(max));

    var myNumber = Math.ceil(Math.random() * max);
    var guess = +prompt("Alright, I'm thinking of a number from 1 to " + max + ". Can you guess my number?");

    while (guess != myNumber) {
        if (guess < myNumber) {
            guess = +prompt('My number is higher. Guess again.');
        } else if (guess > myNumber) {
            guess = +prompt('My number is lower. Guess again.');
        }
    }

    alert('Yes! You guessed my number, ' + myNumber + '.\nRefresh to play again.');
} else {
    alert('No hard feelings. Goodbye.')
}