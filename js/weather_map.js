"use strict";

$(document).ready(function() {
    const SEC = 1000;

    var coordinates = {
            lat: 29.423017,
            lon: -98.48527
        }

    var place = 'San Antonio',
        mouseCoords,
        today;

    $('#place').html(place);

    const searchInput = $('#search-input');

    function getForecast(coords) {
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            appid: OPEN_WEATHER_API_KEY,
            lat:    coords.lat,
            lon:   coords.lon,
            units: 'imperial'
        }).done(function(data) {
            var forecast = $('#forecast'),
                card;

            forecast.html('');

            data.daily.slice(0, 5).forEach(function(day) {
                today = new Date(day.dt * SEC);

                card = `<div class="card">
                            <div class="card-header">${today.toDateString()}</div>
                            <div class="card-body">
                                <div class="text-center">
                                    <h3 class="card-title">${day.temp.max}&deg; / ${day.temp.min}&deg;</h3>
                                    <img src="http://openweathermap.org/img/w/${day.weather[0].icon}.png" alt="Weather Conditions">
                                    <span>${day.weather[0].description}</span>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Humidity: ${day.humidity}%</li>
                                    <li class="list-group-item">Wind speed: ${day.wind_speed} mph</li>
                                    <li class="list-group-item">Pressure: ${day.pressure} hPa</li>
                                </ul>
                            </div>
                        </div>`;

                forecast.append(card);
            });
        });
    }

    getForecast(coordinates);

    mapboxgl.accessToken = MAPBOX_API_KEY;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [coordinates.lon, coordinates.lat]
    });

    var marker = new mapboxgl.Marker()
        // .setLngLat([coordinates.lon, coordinates.lat])
        // .addTo(map);

    geocode(place, MAPBOX_API_KEY).then(function(coords) {
        console.log(coords);
        map.setCenter(coords);
        map.setZoom(7.5);
    });

    $('#search-btn').click(function(event) {
        // console.log($(this).prev().val());
        place = $(this).prev().val();
        geocode(place, MAPBOX_API_KEY).then(function(coords) {
            console.log(coords);
            map.setCenter(coords);
            map.setZoom(10);

            coordinates.lon = coords[0];
            coordinates.lat = coords[1];

            $('#place').html(place);
            getForecast(coordinates);
        });
    });

    map.on('mousemove', function(event) {
        // console.log(event.lngLat);
        mouseCoords = event.lngLat;
    });

    function humanReadableCoordinates(coords) {
        var latDir = coords.lat > 0 ? 'N' : 'S';
        var lngDir = coords.lng > 0 ? 'E' : 'W';

        var long = Math.abs(coords.lng).toFixed(5);
        var latt = Math.abs(coords.lat).toFixed(5);

        return `${latt}&deg; ${latDir}, ${long}&deg; ${lngDir}`;
    }

    map.on('click', function(event) {
        marker.setLngLat(mouseCoords)
            .addTo(map);

        coordinates.lon = mouseCoords.lng;
        coordinates.lat = mouseCoords.lat;
        // console.log(event);
        // console.log(mouseCoords);
        getForecast(coordinates);
        $('#place').html(humanReadableCoordinates(mouseCoords));
        map.setCenter(mouseCoords);
    });
});