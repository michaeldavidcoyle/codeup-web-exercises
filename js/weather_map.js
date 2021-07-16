"use strict";

$(document).ready(function() {
    const SEC = 1000;
    var today;

    $.get("https://api.openweathermap.org/data/2.5/weather", {
        appid: OPEN_WEATHER_API_KEY,
        q: "San Antonio, US",
        units: 'imperial'
    }).done(function(data) {
        console.log(data);

        today = new Date(data.dt * SEC);
        $('#main-heading').html(`${data.name} Weather`);
        $('#day-1').html(today.toDateString());
        $('#current-temp').html(`${data.main.temp}&deg; F`);
        $('#feels-like').html(`Feels like: ${data.main.feels_like}&deg`)
        $('#conditions').attr('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
        $('#hi-lo').html(`${data.main.temp_max}&deg;/${data.main.temp_min}&deg;`);
    });
});