/*jshint esversion: 6 */

import { fortuneCookies, weatherData } from './Data';

const DataHandler = {

    getFortune() {
        return fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)];
    },

    getWeatherData() {
        return weatherData;
    }
}

export { DataHandler };