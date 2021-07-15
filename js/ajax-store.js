(function() {
    "use strict";
    // Create an AJAX GET request for the file under data/inventory.json

    // Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements
    var tableBody = $('#insertProducts');
    var inventory;
    var alphaSorted = false;
    var quantitySorted = false;
    var priceSorted = false;

    function loadJson(data) {
        // console.log('Inventory: ');
        // console.log(data);
        data.forEach(function(datum) {
            var columns = [
                datum.title, datum.quantity, '$' + datum.price, datum.categories.join(', ')
            ];
            tableBody.append('<tr><td>' + columns.join('</td><td>') + '</td></tr>');
        });

        inventory = data;
    }

    function loadSorted(data) {
        if (alphaSorted) {
            data.sort(function(a, b) {
                if (a['title'] < b['title']) return 1;
                if (a['title'] > b['title']) return -1;
                return 0;
            });

            alphaSorted = false;
        } else {
            data.sort(function(a, b) {
                if (a['title'] < b['title']) return -1;
                if (a['title'] > b['title']) return 1;
                return 0;
            });

            alphaSorted = true;
        }

        loadJson(data);
    }

    function loadQuantitySorted(data) {
        if (quantitySorted) {
            data.sort(function(a, b) {
                return b['quantity'] - a['quantity'];
            });

            quantitySorted = false;
        } else {
            data.sort(function(a, b) {
                return a['quantity'] - b['quantity'];
            });

            quantitySorted = true;
        }

        loadJson(data);
    }

    function loadPriceSorted(data) {
        if (priceSorted) {
            data.sort(function(a, b) {
                return b['price'] - a['price'];
            });

            priceSorted = false;
        } else {
            data.sort(function(a, b) {
                return a['price'] - b['price'];
            });

            priceSorted = true;
        }

        loadJson(data);
    }

    $.get("data/inventory.json", {
        limit:  10,
        offset: 20
    }).done(loadJson);

    $('#refresh').click(function() {
        tableBody.html('');

        $.get("data/inventory.json", {
            limit:  10,
            offset: 20
        }).done(loadJson);
    });

    $('#sort').click(function() {
        tableBody.html('');
        loadSorted(inventory);
    });

    $('#sort-quantity').click(function() {
        tableBody.html('');
        loadQuantitySorted(inventory);
    });

    $('#sort-price').click(function() {
        tableBody.html('');
        loadPriceSorted(inventory);
    });
})();