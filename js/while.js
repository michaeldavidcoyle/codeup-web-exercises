"use strict";

/* Create a while loop that uses console.log() to create the output shown below.
2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536
*/

var int = 1;

while (int < 65536) {
    int *= 2;
    console.log(int);
}

/*
 An ice cream seller can't go home until she sells all of her cones. First write
 enough code that generates a random number between 50 and 100 representing the
 amount of cones to sell before you start your loop. Inside of the loop your
 code should generate another random number between 1 and 5, simulating the
 amount of cones being bought by her clients. Use a do-while loop to log to the
 console the amount of cones sold to each person.
*/

var maxCones = 100,
    minCones = 50;

var maxSold = 5,
    minSold = 1;

var totalCones = Math.floor(Math.random() * (maxCones - minCones + 1) + minCones);

do {
    var conesSold = Math.floor(Math.random() * (maxSold - minSold + 1) + minSold);

    totalCones -= conesSold;

    console.log(conesSold + ' cones sold!');
} while (totalCones > 0);

console.log('Only ' + totalCones + ' left');