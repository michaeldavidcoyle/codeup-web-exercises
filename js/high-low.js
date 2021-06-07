"use strict";

var wantsToPlay = confirm('Would you like to play the high/low game?');

if (wantsToPlay) {
    var myNumber = Math.ceil(Math.random() * 100);
    console.log('My number is ' + myNumber);
} else {
    alert('No hard feelings. Goodbye.')
}