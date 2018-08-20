const port = (process.env.PORT || 3000);
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
    res.render('index.pug', {title: 'GMH Homepage'});
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
app.post('/hello', (req, res, next) => {

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

    const hasName = (req, res, next) => {
        if (req.param('name')) {
            next();
        } else {
            res.send('<p>What is your name?</p>');
        }
    };

    const sayHello = (req, res, next) => {
        res.send('<p>Hello ' + req.param('name'));
    };
    app.get('/ask', hasName, sayHello);

app.listen(port);
console.log(`Server listening at 127.0.0.1:${port}`);

