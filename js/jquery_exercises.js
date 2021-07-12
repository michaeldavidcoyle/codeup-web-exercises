"use strict";

$(document).ready(function() {
    var all_h1 = $('h1');
    var all_li = $('li');
    var all_p = $('p');
    /*
    alert('The DOM has finished loading.');

    alert( $('#pop').html() );
    alert( $('#list-no-style').html() );

    $('.codeup').css('border', '1px solid red');

    all_li.css('font-size', '20px');

    all_h1.css('background-color', 'ivory');
    all_p.css('background-color', 'yellow');
    all_li.css('background-color', 'yellowgreen');

    alert(all_h1.html());

    $('h1, p, li').css('background-color', 'yellowgreen');
    */

    // Change the background color of an h1 element when clicked
    /*
    // one-way change
    all_h1.click(function() {
        $(this).css('background-color', 'white');
    });
    */

    // toggling background-color
    var h1Clicked = false;

    all_h1.click(function() {
        if (h1Clicked) {
            $(this).css('background-color', '#c8e8c8');
            h1Clicked = false;
        } else {
            $(this).css('background-color', 'white');
            h1Clicked = true;
        }
    });

    // Make all paragraphs' font size 18px when double clicked
    all_p.dblclick(function() {
        $(this).css('font-size', '18px');
    });

    // Set all li text color to red when the mouse is hovering;
    // reset to black when it is not
    all_li.hover(function() {
        $(this).css('color', 'red');
    }, function() {
        $(this).css('color', 'black');
    });
});