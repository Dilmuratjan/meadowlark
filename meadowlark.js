const express = require('express');
const app = express();
const handlebars = require('express3-handlebars').create({ defaultLayout:'main' });

const port = 3000
const fortunes = [
	"Conquer your fears or they will conqur you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple."
];

app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || port);

app.get('/',(req,res)=>{
	res.render('home');
});

app.get('/about',(req,res)=>{
	res.render('about', {fortune: fortunes[Math.floor(Math.random()*fortunes.length)]});
});

app.use((req, res)=>{
	res.status(404);
	res.render('404');
});

app.use((err, req, res, next)=>{
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), ()=>{
	console.log('Express started on http://localhost:' + app.get('port') + '; press Control-C to terminate.');	
});
