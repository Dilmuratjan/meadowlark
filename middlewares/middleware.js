/*jshint esversion: 6 */

import { DataHandler } from '../lib/DataHandler';

function middleware(app) {

    app.use((req, res, next) => {
        res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
        next();
    });
    
    app.use((req, res, next) => {
        if (!res.locals.partials) res.locals.partials = {};
        res.locals.partials.weather = DataHandler.getWeatherData();
        next();
    });
}


export{ middleware };