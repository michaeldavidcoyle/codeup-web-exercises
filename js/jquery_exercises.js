"use strict";

$(document).ready(function() {
    var all_h1 = $('h1');
    var all_li = $('li');
    var all_p = $('p');
    // alert('The DOM has finished loading.');

    // alert( $('#pop').html() );
    // alert( $('#list-no-style').html() );

    // $('.codeup').css('border', '1px solid red');

    // all_li.css('font-size', '20px');
    //
    // all_h1.css('background-color', 'ivory');
    // all_p.css('background-color', 'yellow');
    // all_li.css('background-color', 'yellowgreen');
    //
    // alert(all_h1.html());
    //
    // $('h1, p, li').css('background-color', 'yellowgreen');

    // Change the background color of an h1 element when clicked
    all_h1.click(function() {
        $(this).css('background-color', 'white');
    });
});