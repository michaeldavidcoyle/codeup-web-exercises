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
    var imgLeft = $('#img-left');
    var imgCenter = $('#img-center');
    var imgRight = $('#img-right');

    var bigBendImg = 'img/big-bend.jpeg';
    var kingsImg = 'img/kings-canyon.jpeg';
    var genShermanImg = 'img/general-sherman-tree.jpg';

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

    $('#swap-btn-1').click(function() {
        var left = imgLeft.attr('src');
        var center = imgCenter.attr('src');

        imgLeft.attr('src', center);
        imgCenter.attr('src', left);
    });

    $('#swap-btn-2').click(function() {
        var random = (Math.random() < 0.5) ? imgLeft : imgRight;

        var center = imgCenter.attr('src');
        var randomSrc = random.attr('src');

        imgCenter.attr('src', randomSrc);
        random.attr('src', center);
    });

    $('#swap-btn-3').click(function() {
        var right = imgRight.attr('src');
        var center = imgCenter.attr('src');

        imgRight.attr('src', center);
        imgCenter.attr('src', right);
    });
});