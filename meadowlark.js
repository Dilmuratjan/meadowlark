/*jshint esversion: 6 */

import express from 'express';
import handlebars from 'express3-handlebars';

import { DataHandler } from './lib/DataHandler';
import { router } from './routers/router';

const app = express();
const port = 3000;

app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || port);

app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
});
app.use((req, res, next)=>{
    if(!res.locals.partials) res.locals.partials = {};
    res.locals.partials.weather = DataHandler.getWeatherData();
    next();
});

router(app);

app.use((req, res) => res.status(404).render('404'));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/plain').status(500).render('500');
});

app.listen(app.get('port'), () => console.log('Express started on http://localhost:' + app.get('port') + '; press Control-C to terminate.'));