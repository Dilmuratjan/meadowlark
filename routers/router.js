/*jshint esversion: 6 */

import { DataHandler } from '../lib/DataHandler';

function router(app) {
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
            Data.products.map((p) => '<tour price="' +
                p.price + '" id="' +
                p.id + '">' +
                p.name + '</tour>').join('') + '</tours>';

        res.format({
            'application/json': () => res.json(tours),
            'application/xml': () => res.type('application/xml').send(toursXml),
            'text/xml': () => res.type('text/xml').send(toursXml),
            'text/plain': () => res.type('text/plain').send(toursXml)
        });
    });
}

export { router };