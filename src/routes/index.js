const hatRouter = require('./hat');
const bagRouter = require('./bag');
const jeansRouter = require('./jeans');
const shortRouter = require('./short');
const T_shirtRouter = require('./T_shirt');
const siteRouter = require('./site');

function route(app){

    app.use('/hat', hatRouter);
    app.use('/bag', bagRouter);
    app.use('/jeans', jeansRouter);
    app.use('/short', shortRouter);
    app.use('/T_shirt', T_shirtRouter);

    app.use('/', siteRouter);


}

module.exports = route;
