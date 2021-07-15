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
                '<h2>' + datum['title'] + '</h2>',
                '<p>' + datum['date'] + '</p>',
                '<p>' + datum['content'] + '</p>',
                '<p>' + datum['categories'].join(', ') + '</p>'
            );
        });
    });
});