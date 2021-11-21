const T_shirtRouter = require('./T_shirt');
const siteRouter = require('./site');
const loginRouter = require('./login');
const userRouter = require('./login');
const createRouter = require('./T_shirt');
const updateRouter = require('./T_shirt');

function route(app){
    app.use('/T_shirt/create',createRouter);
    app.use('/T_shirt', T_shirtRouter);
    app.use('/T_shirt/:id',updateRouter);
    app.use('/login', loginRouter);
    app.use('/login/user',userRouter);
    app.use('/', siteRouter);
}

module.exports = route;
