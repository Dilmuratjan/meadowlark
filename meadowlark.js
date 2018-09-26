const express = require('express');
const handlebars = require('express3-handlebars').create({ defaultLayout:'main' });
const fortune = require('./lib/fortune.js');
const app = express();
const port = 3000


app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || port);

app.get('/', (req, res) => res.render('home'));

app.get('/about', (req, res) => res.render('about', { fortune: fortune.getFortune() }));

app.use((req, res) => {
	res.status(404).render('404');
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.type('text/plain').status(500).render('500');
});

app.listen(app.get('port'), () => console.log('Express started on http://localhost:' + app.get('port') + '; press Control-C to terminate.'));
