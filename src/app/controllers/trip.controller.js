const { Trip, Station } = require("../../models");

class TripController {
    async index(req, res) {
        try {
            const trips = await Trip.findAll({
                include: [
                    {
                        model: Station,
                        as: "departure",
                    }, 
                    {
                        model: Station,
                        as: "destination",
                    }
                ]
            });
            res.status(200).json({
                'message': 'success', 
                trips
            })
        } catch (error) {
            res.status(500).json({
                message: `Có lỗi xảy ra! ${error.message}`,
                error: 1,
            })
        }
    }

    async store(req, res) {
        try {
            const { startTime, price, departureId, destinationId } = req.body;
            const newTrip = await Trip.create({ startTime, price, departureId, destinationId });
            res.status(201).json({
                'message': 'success', 
                trip: newTrip
            })   
        } catch (error) {
            res.status(500).json({
                message: `Có lỗi xảy ra! ${error.message}`,
                error: 1,
            })
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            const trip = await Trip.findOne({
                where: {
                    id,
                }, 
                include: [
                    {
                        model: Station,
                        as: "departure",
                    }, 
                    {
                        model: Station,
                        as: "destination",
                    }
                ]
            });
            res.status(200).json({
                'message': 'success', 
                trip
            })
        } catch (error) {
            res.status(500).json({
                message: `Có lỗi xảy ra! ${error.message}`,
                error: 1,
            })
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const updateTrip = await Trip.findOne({
                where: {
                    id,
                }
            });
            console.log(updateTrip);
            const { startTime, price, departureId, destinationId } = req.body;
            updateTrip.startTime = startTime;
            updateTrip.price = price;
            updateTrip.departureId = departureId;
            updateTrip.destinationId = destinationId;
            await updateTrip.save();
            res.status(200).json({
                'message': 'success', 
                trip: updateTrip
            })
        } catch (error) {
            res.status(500).json({
                message: `Có lỗi xảy ra! ${error.message}`,
                error: 1,
            })
        }
    }

    async destroy(req, res) {
        try {
            const id = req.params.id;
            const trip = await Trip.destroy({
                where: {
                    id,
                }
            });
            res.status(200).json({
                'message': 'deleted successfully', 
            })
        } catch (error) {
            res.status(500).json({
                message: `Có lỗi xảy ra! ${error.message}`,
                error: 1,
            })
        }
    }
}

module.exports = new TripController();