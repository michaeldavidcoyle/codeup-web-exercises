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

var totalCones = Math.floor(Math.random() * 51 + 50),
    conesSold;

do {
    conesSold = Math.floor(Math.random() * 6 + 5);

    if (conesSold <= totalCones) {
        console.log(conesSold + ' cones sold!');
    } else {
        console.log('Sorry, I only have ' + totalCones + ' cones left.');
        break;
    }

    totalCones -= conesSold;
} while (totalCones > 0);

console.log(totalCones + ' cones unsold :(');