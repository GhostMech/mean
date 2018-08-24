process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const port = (process.env.PORT || 3000);
const mongoose = require('./config/mongoose');
const db = mongoose();
const express = require('./config/express');
const app = express();


app.use(function(req, res, next) {
    console.log(req.method);

    next();
});

//app.set('view engine', 'pug');
app.get('/', (req, res, next) => {
    //res.send('<h1>Express server is up!</h1>');
});
app.get('/pug', (req, res, next) => {
    res.render('index', {title: 'GMH Homepage'});
});

app.get('/hello', (req, res, next) => {

    let all = {
        query: req.query,
        params: req.params,
        body: req.body,
        path: req.path,
        host: req.hostname,
        cookies: req.cookies
    };

    res.send(JSON.stringify(all));
});
app.get('/register', (req, res, next) => {
    res.render('users');
});


app.listen(port);
module.exports = app;
console.log(`Server listening at 127.0.0.1:${port}`);
