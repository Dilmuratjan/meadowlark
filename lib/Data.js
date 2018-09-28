/*jshint esversion: 6 */

const fortuneCookies = [
    "Conquer your fears or they will conqur you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple."
];

const weatherData = {
    locations: [{
        name: 'Portland',
        forecastUrl: 'http://www.wunderground.com/US/OR/Portland.html',
        iconUrl: 'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
        weather: 'Overcast',
        temp: '54.1 F (12.3 C)'
    }, {
        name: 'Bend',
        forecastUrl: 'http://www.wunderground.com/US/OR/Bend.html',
        iconUrl: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif',
        weather: 'Partly Cloudy',
        temp: '55.0 F (12.8 C)'
    }, {
        name: 'Manzanita',
        forecastUrl: 'http://www.wunderground.com/US/OR/Manzanita.html',
        iconUrl: 'http://icons-ak.wxug.com/i/c/k/rain.gif',
        weather: 'LightRain',
        temp: '55.0 F (12.8 C)'
    }]
};

const products = [{ "price": "$10.99", "id": 0, "name": "fishing" }, { "price": "$20.99", "id": 1, "name": "camping" }];


export {
    fortuneCookies,
    products,
    weatherData
};