(function(){
    "use strict";

    /**
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['John', 'Paul', 'George', 'Ringo'];

    /**
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log('The names array has ' + names.length + ' elements.');

    /**
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log('\n', 'individual console.logs');

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log('\n', 'for loop: ');
    for (var index = 0; index < names.length; index++) {
        console.log(names[index])
    }

    /**
     * Refactor your above code to use a `forEach` loop
     */
    console.log('\n', 'forEach: ');
    names.forEach(function(name) {
        console.log(name);
    });

    /**
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    console.log('\n', 'tests for first, second and last functions');

    function first(array) {
        return array[0];
    }

    console.log('The first element in the names array is ' + first(names));

    function second(array) {
        return array[1];
    }

    console.log('The second element in the names array is ' + second(names));

    function last(array) {
        return array[array.length - 1];
    }

    console.log('The last element in the names array is ' + last(names));
})();
