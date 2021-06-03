"use strict";

/* ########################################################################## */

/**
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColorIf(color) {
    var message;

    if (color == 'blue') {
        message = "Blue is the color of the sky.";
    } else if (color == 'red') {
        message = "Strawberries are red.";
    } else if (color == 'cyan') {
        message = "I don't know anything about cyan.";
    } else {
        message = "I don't know what to say about " + color + ".";
    }
    return message;
}

console.log(analyzeColorIf('blue'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log( analyzeColorIf(randomColor) );

/**
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(color) {
    var message;

    switch (color) {
        case "blue":
            message = "Blue is the color of the sky.";
            break;
        case "red":
            message = "Strawberries are red.";
            break;
        case "cyan":
            message = "I don't know anything about cyan.";
            break;
        default:
            message = "I don't know what to say about " + color + ".";
            break;
    }

    return message;
}

/**
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("Enter a color: ");

alert(analyzeColor(userColor));

/* ########################################################################## */

/**
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, total) {
    var discount;

    switch (luckyNumber) {
        case 0:
            discount = 0;
            break;
        case 1:
            discount = 0.1;
            break;
        case 2:
            discount = 0.25;
            break;
        case 3:
            discount = 0.35;
            break;
        case 4:
            discount = 0.5
            break;
        case 5:
            discount = 1;
            break;
    }

    return total - (total * discount);
}

console.log( "Total: $" + calculateTotal(0, 100).toFixed(2) );
console.log( "Total: $" + calculateTotal(1, 100).toFixed(2) );
console.log( "Total: $" + calculateTotal(2, 100).toFixed(2) );
console.log( "Total: $" + calculateTotal(3, 100).toFixed(2) );
console.log( "Total: $" + calculateTotal(4, 100).toFixed(2) );
console.log( "Total: $" + calculateTotal(5, 100).toFixed(2) );

/**
 * Uncomment the line below to generate a random number between 0 and 5.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 5
var luckyNumber = Math.floor(Math.random() * 6);
var subtotal = 100;
alert(
    "Subtotal: " + subtotal + ". Lucky number: " + luckyNumber + ". Total with discount: " + calculateTotal(luckyNumber, subtotal)
);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var userWantsToParticipate = confirm("Would you like to enter a number?");

if (userWantsToParticipate) {
    var userInput = prompt("Enter a whole number: ");
    var userNumber = Number(userInput);
    var evenOrOdd = userNumber % 2 == 0 ? "even" : "odd";
    var plus100 = userNumber + 100;
    var negativeOrPositive = userNumber < 0 ? "negative" : "positive";

    if (isNaN(userInput)) {
        alert('Sorry, but, "' + userInput + '" is not a number.');
    } else {
        alert(
            userNumber + " is an " + evenOrOdd + " number." + "\n" +
            userNumber + " + 100 = " + plus100 + "\n" +""
            userNumber + " is a " + negativeOrPositive + " number."
        );
    }
}