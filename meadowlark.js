/*jshint esversion: 6 */

import express from 'express';
import handlebars from 'express3-handlebars';

import { DataHandler } from './lib/DataHandler';

const app = express();
const port = 3000;


app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || port);

app.use((req, res, next) => {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
});

app.get('/', (req, res) => res.render('home'));

app.get('/about', (req, res) => {
    res.render('about', {
        fortune: DataHandler.getFortune(),
        pageTestScript: '/qa/tests-about.js'
    });
});

app.get('/tours/hood-river', (req, res) => res.render('tours/hood-river'));

app.get('/tours/request-group-rate', (req, res) => res.render('tours/request-group-rate'));

app.get('/headers', (req, res) => {
    res.set('Content-Type', 'text/plain');
    let s = '';
    for (let name in req.headers)
        s += name + ':' + req.headers[name] + '\n';
    res.send(s);
});

app.get('/greeting', (req, res) => {
    res.render('about', {
        message: 'welcome  ' + req.query.username,
    });
});

app.get('/api/products', (req, res) => {
    let toursXml = '<?xml version="1.0"?><tours>' +
        Data.products.map((p) => '<tour price="' + p.price + '" id="' + p.id + '">' + p.name + '</tour>').join('') + '</tours>';

    res.format({
        'application/json': () => res.json(tours),
        'application/xml': () => res.type('application/xml').send(toursXml),
        'text/xml': () => res.type('text/xml').send(toursXml),
        'text/plain': () => res.type('text/plain').send(toursXml)
    });
});

app.post('/process-contact', (req, res) => {
    console.log('Received contact from [' + req.body.name + '<' + req.body.email + '>' + '] ');
    res.redirect(303, '/thank you.');
});

app.use((req, res) => res.status(404).render('404'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/plain').status(500).render('500');
});

app.listen(app.get('port'), () => console.log('Express started on http://localhost:' + app.get('port') + '; press Control-C to terminate.'));