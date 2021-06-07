"use strict";

var wantsToPlay = confirm('Would you like to play the high/low game?'),
    guessCount = 1;

if (wantsToPlay) {
    do {
        var max = parseInt(prompt('Enter a number greater than one (whole numbers only please).\nThe higher the number, the longer the game.'));
    } while (isNaN(max) || max < 2);

    var myNumber = Math.ceil(Math.random() * max);
    var guess = +prompt("Alright, I'm thinking of a number from 1 to " + max + ". Can you guess my number?");

    while (guess != myNumber) {
        if (guess < myNumber) {
            guess = +prompt('My number is higher. Guess again.');
        } else if (guess > myNumber) {
            guess = +prompt('My number is lower. Guess again.');
        }

        guessCount++;
    }

    alert('Yes! You guessed my number, ' + myNumber + '.\nIt took you ' + guessCount + ' guesses.\nRefresh to play again.');
} else {
    alert('No hard feelings. Goodbye.')
}