const { Station } = require("../../models")

class StationController {
    async index(req, res) {
        try {
            const stations = await Station.findAll();
            res.status(200).json({
                'message': 'success', 
                stations
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
            const { name, address, province } = req.body;
            console.log(req.body);
            const station = await Station.create({ name, address, province });
            res.status(201).json({
                'message': 'success', 
                station
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
            const id = req.params.id;
            const station = await Station.findOne({
                where: {
                    id,
                }
            });
            if (station) {
                res.status(200).json({
                    'message': 'success', 
                    station
                })
            } else {
                res.status(404).json({
                    'message': 'not found', 
                    station
                })
            }
        } catch (error) {
            res.status(500).json({
                message: `Có lỗi xảy ra! ${error.message}`,
                error: 1,
            })
        }
    }
    async update(req, res) {
        try {
            const id = req.params.id;
            const station = await Station.findOne({
                where: {
                    id,
                }
            });
            if (station) {
                const { name, address, province } = req.body;
                station.name = name;
                station.address = address;
                station.province = province;
                await station.save();
                res.status(200).json({
                    'message': 'success', 
                    station
                })
            } else {
                res.status(404).json({
                    'message': 'not found', 
                    station
                })
            }
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
            const station = await Station.destroy({
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

module.exports = new StationController();