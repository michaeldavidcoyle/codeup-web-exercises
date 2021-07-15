(function() {
    "use strict";
    // Create an AJAX GET request for the file under data/inventory.json

    // Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements
    var tableBody = $('#insertProducts');

    function loadJson(data) {
        // console.log('Inventory: ');
        // console.log(data);
        data.forEach(function(datum) {
            var columns = [
                datum.title, datum.quantity, datum.price, datum.categories.join(', ')
            ];
            tableBody.append('<tr><td>' + columns.join('</td><td>') + '</td></tr>');
        });
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

    tableBody.children().each(function(index) {
        console.log($(this));
    });
})();