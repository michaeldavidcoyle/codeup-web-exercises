"use strict";

$(document).ready(function() {
    // alert('The DOM has finished loading.');

    // alert( $('#pop').html() );
    // alert( $('#list-no-style').html() );

    // $('.codeup').css('border', '1px solid red');

    $('li').css('font-size', '20px');

    $('h1').css('background-color', 'ivory');
    $('p').css('background-color', 'yellow');
    $('li').css('background-color', 'yellowgreen');

    alert($('h1').html());

    $('h1, p, li').css('background-color', 'yellowgreen');
});