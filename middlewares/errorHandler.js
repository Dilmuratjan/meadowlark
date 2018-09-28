/*jshint esversion: 6 */

function errorHandler(app) {

    app.use((req, res) => res.status(404).render('404'));

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.type('text/plain').status(500).render('500');
    });

}


export { errorHandler };