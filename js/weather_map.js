"use strict";

$(document).ready(function() {
    const SEC = 1000;

    var coordinates = {
            lat: 29.423017,
            lon: -98.48527
        }

    var today, i;

    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        appid: OPEN_WEATHER_API_KEY,
        lat:    coordinates.lat,
        lon:   coordinates.lon,
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
            $(`#hi-lo-${i}`).html(`${day.temp.max}&deg; / ${day.temp.min}&deg;`);
            $(`#description-${i}`).html(day.weather[0].description);
            $(`#humidity-${i}`).html(`Humidity: ${day.humidity}%`);
            $(`#wind-${i}`).html(`Wind speed: ${day.wind_speed} mph`);
            $(`#pressure-${i}`).html(`Pressure: ${day.pressure} hPa`);
        });
    });

    mapboxgl.accessToken = MAPBOX_API_KEY;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [coordinates.lon, coordinates.lat]
    });

    // the  geocode method from mapbox-geocoder-utils.js
    geocode("San Antonio", MAPBOX_API_KEY).then(function(coords) {
        console.log(coords);
        map.setCenter(coords);
        map.setZoom(10);
    });
});