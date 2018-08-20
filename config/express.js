const express = require('express');
const morgan  = require('morgan');
const compress = require('compression');
const methodOverride = require('method-override');

module.exports = function() {
    const app = express();

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(methodOverride());


    require('../app/routes/index.server.routes.js')(app);

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    return app;
};
