/*jshint esversion: 6 */

import express from 'express';
import handlebars from 'express3-handlebars';

import { DataHandler } from './lib/DataHandler';
import { router } from './routers/router';
import { middleware } from './middlewares/middleware';
import { errorHandler } from './middlewares/errorHandler';


const app = express();
const port = 3000;
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || port);


middleware(app);

router(app);

errorHandler(app);

app.listen(app.get('port'), () => console.log('Express started on http://localhost:' + app.get('port') + '...'));