const stationRouter = require('./station.router');
const authRouter = require('./auth.router');
const profileRouter = require('./profile.router');

function route(app) {
    app.use('/api/v1/stations', stationRouter);
    app.use('/api/v1/auth', authRouter);
    app.use('/api/v1/profile', profileRouter);
}
module.exports = route;
