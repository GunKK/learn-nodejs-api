const stationRouter = require('./station.router');
const authRouter = require('./auth.router');

function route(app) {
    app.use('/api/v1/stations', stationRouter);
    app.use('/api/v1/auth', authRouter);
}
module.exports = route;
