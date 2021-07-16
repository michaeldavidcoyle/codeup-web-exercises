"use strict";

$(document).ready(function() {
    const SEC = 1000;
    var today,
        i;

    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        appid: OPEN_WEATHER_API_KEY,
        lat:    29.423017,
        lon:   -98.48527,
        units: 'imperial'
    }).done(function(data) {
        console.log(data);
        data.daily.forEach(function(day, index) {
            today = new Date(day.dt * SEC);
            i = index + 1;
            // $('#main-heading').html(`${data.name} Weather`);
            $(`#day-${i}`).html(today.toDateString());
            // $('#current-temp').html(`${data.main.temp}&deg; F`);
            $(`#conditions-${i}`).attr('src', `http://openweathermap.org/img/w/${day.weather[0].icon}.png`);
            $(`#hi-lo-${i}`).html(`${day.temp.max}&deg;/${day.temp.min}&deg;`);
            $(`#description-${i}`).html(day.weather[0].description);
            $(`#humidity-${i}`).html(`Humidity: ${day.humidity}%`);
            $(`#wind-${i}`).html(`Wind speed: ${day.wind_speed} mph`);
            $(`#pressure-${i}`).html(`Pressure: ${day.pressure} hPa`);
        });
    });
});