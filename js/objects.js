(function() {
    "use strict";

    /**
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: 'Michael',
        lastName: 'Coyle'
    }

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        return 'Hello from ' + this.firstName + ' ' + this.lastName + '!';
    }

    console.log(person.sayHello());

    /**
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    var discountRate = 0.12;

    shoppers.forEach(function (shopper) {
        var discount = 0,
            message = shopper.name + ' bought $' + shopper.amount,
            total = shopper.amount;

        if (shopper.amount > 200) {
            discount = shopper.amount * discountRate;
            total -= discount;
            message += ', so the discount is $' + discount.toFixed(2) +
                '. Total with discount is $' + total.toFixed(2);
        } else {
            message += ', so no discount applies. Total is $' + total.toFixed(2);
        }

        console.log(message);

    });

    /**
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // Initial solution
    // var books = [
    //     {
    //         title: 'The Cat in the Hat',
    //         author: {
    //             firstName: 'Dr.',
    //             lastName: 'Seuss'
    //         }
    //     },
    //     {
    //         title: 'You Don\'t Know JavaScript',
    //         author: {
    //             firstName: 'Kyle',
    //             lastName: 'Simpson'
    //         }
    //     },
    //     {
    //         title: 'The Razor\'s Edge',
    //         author: {
    //             firstName: 'Somerset',
    //             lastName: 'Maugham'
    //         }
    //     },
    //     {
    //         title: 'The Object Stares Back',
    //         author: {
    //             firstName: 'James',
    //             lastName: 'Elkins'
    //         }
    //     },
    //     {
    //         title: 'A River Runs Through It',
    //         author: {
    //             firstName: 'Norman',
    //             lastName: 'Maclean'
    //         }
    //     }
    // ];
    // Refactoring for bonus
    var books = [
        createBook('The Cat in the Hat', {firstName: 'Dr.', lastName: 'Seuss'}),
        createBook('You Don\'t Know JavaScript', {firstName: 'Kyle', lastName: 'Simpson'}),
        createBook('The Razor\'s Edge', {firstName: 'Somerset', lastName: 'Maugham'}),
        createBook('The Object Stares Back', {firstName: 'James', lastName: 'Elkins'}),
        createBook('A River Runs Through It', {firstName: 'Norman', lastName: 'Maclean'})
    ];

    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);

    /**
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(book, index) {
        console.log('Book #' + (index + 1));
        console.log('Title: ' + book.title);
        console.log('Author: ' + book.author.firstName + ' ' + book.author.lastName);
        console.log('---');
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author) {
        if (typeof author === 'string') {
            author = {
                firstName: author.split(' ')[0],
                lastName: author.split(' ')[1]
            }
        }

        return {
            title: title,
            author: author
        }
    }

    console.log( createBook('Superintelligence: Paths, Dangers, Strategies', 'Nick Bostrom') );
    console.log( createBook('Blindness', {firstName: 'Jose', lastName: 'Saramago'}) );
})();
