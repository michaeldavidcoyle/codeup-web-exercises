"use strict";

$(document).ready(function() {
    // creating link that toggles answers
    // var divHTML = $('div').html();
    //
    // $('div').html(divHTML + '<a href="#">toggle answers</a>');
    // $('a').click(function() {
    //     $('dd').toggleClass('invisible');
    // });

    // listening for click on each dt to reveal its corresponding answer
    $('dd').addClass('invisible');

    $('dt').click(function(event) {
        console.log(event);
        $(this).toggleClass('highlight');
        // $(event.target.nextElementSibling).slideToggle('fast');
        $(this).next().slideToggle('fast');
    });

    $('#highlight-last-li').click(function(event) {
        $('ul').each(function() {
            $(this).children().last().css('background-color', 'yellow');
        });
    });

    $('h3').click(function() {
        $(this).next().css('font-weight', 'bold');
    });

    $('li').click(function() {
        $(this).parent().children().first().css('color', 'blue');
    });
});