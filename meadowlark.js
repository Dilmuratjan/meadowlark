let express = require('express');
let app = express();
let handlebars = require('express3-handlebars').create({ defaultLayout:'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

app.get('/',(req,res)=>{
	res.render('home');
});

app.get('/about',(req,res)=>{
	res.render('about');
});

// 404
app.use((req, res)=>{
	res.status(404);
	res.render('404');
});

//500
app.use((err, req, res, next)=>{
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), ()=>{
	console.log('Express started on http://localhost:' + app.get('port') + '; press Control-C to terminate.');	
});
