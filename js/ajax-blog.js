"use strict";

$(document).ready(function() {
    // alert("Let's get this show on the road.");

    var posts = $('#posts');

    $.get("data/blog.json", {
        limit:  10,
        offset: 20
    }).done(function(data) {
        data.forEach(function(datum) {
            $('#posts').append(
                '<div class="m-2 p-2 border-bottom">',
                '<h2 class="darkgreen">' + datum['title'] + '</h2>',
                '<p class="text-secondary">' + datum['date'] + '</p>',
                '<p>' + datum['content'] + '</p>',
                '<p>' + datum['categories'].join(', ') + '</p>',
                '</div>'
            );
        });
    });
});