const express = require('express');
const StationController = require('../app/controllers/station.controller')
const router = express.Router();    

router.get('/', StationController.index);
router.post('/', StationController.store);
router.get('/:id', StationController.show);
router.put('/:id', StationController.update);
router.delete('/:id', StationController.destroy);

module.exports = router