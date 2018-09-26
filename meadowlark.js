let express = require('express');
let app = express();
app.set('port', process.env.PORT || 3000);

app.get('/',(req,res)=>{
	res.type('text/plain');
	res.send('Meadowlark Travel');
});

app.get('/about',(req,res)=>{
	res.type('text/plain');
	res.send('About Meadowlark Travel');
});
// 404
app.use((req, res)=>{
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

//500
app.use((err, req, res, next)=>{
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'), ()=>{
	console.log('Express started on http://localhost:' + app.get('port') + '; press Control-C to terminate.');	
});
