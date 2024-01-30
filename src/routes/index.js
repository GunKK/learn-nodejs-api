const stationRouter = require('./station.router');

function route(app) {
    app.use('/api/v1/stations', stationRouter);
}
module.exports = route;
