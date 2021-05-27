"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var favoriteColor = prompt("What is your favorite color?");

alert("Great, " + favoriteColor + " is my favorite color too!");

var feePerMoviePerDay = 3;

var movie1 = "The Little Mermaid",
    movie2 = "Brother Bear",
    movie3 = "Hercules";

var rentalDays1 = Number( prompt("How many days do you want to keep " + movie1 + "?") );
var rentalDays2 = Number( prompt("How many days do you want to keep " + movie2 + "?") );
var rentalDays3 = Number( prompt("How many days do you want to keep " + movie3 + "?") );

var totalRentalFee = feePerMoviePerDay * (rentalDays1 + rentalDays2 + rentalDays3);

alert("Your total rental fee is $" + totalRentalFee.toFixed(2));

var company1 = "Google",
    company2 = "Amazon",
    company3 = "Facebook";

var hourlyRate1 = 400,
    hourlyRate2 = 380,
    hourlyRate3 = 350;

var weeklyHoursCompany1 = Number( prompt("Enter hours worked for " + company1) );
var weeklyHoursCompany2 = Number( prompt("Enter hours worked for " + company2) );
var weeklyHoursCompany3 = Number( prompt("Enter hours worked for " + company3) );

var weeklyPay = (weeklyHoursCompany1 * hourlyRate1) + (weeklyHoursCompany2 * hourlyRate2) + (weeklyHoursCompany3 * hourlyRate3);

alert("Your weekly pay is $" + weeklyPay);

var classIsFull = false;
var hasScheduleConflict = false;
var canEnroll = !classIsFull && !hasScheduleConflict;

if (canEnroll) {
    alert("You can enroll in this class.")
} else {
    alert("You cannot enroll in this class.")
}

var offerExpired = false;
var cartItemCount = Number( prompt("How many items are you buying today?") );
var isPremiumMember = confirm("Are you a premium member?");
var offerApplicable = !offerExpired && (isPremiumMember || cartItemCount > 2);

if (offerApplicable) {
    alert("You're eligible for the product offer!");
} else {
    alert("Sorry, you're not eligible for the product offer.");
}