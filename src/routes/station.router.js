const express = require('express');
const StationController = require('../app/controllers/station.controller');
const { checkIdExists } = require('../middlewares/validators/checkIdExist');
const { Station } = require("../models");
const router = express.Router();    

router.get('/', StationController.index);
router.post('/', StationController.store);
router.get('/:id', checkIdExists(Station) ,StationController.show);
router.put('/:id', checkIdExists(Station), StationController.update);
router.delete('/:id', checkIdExists(Station), StationController.destroy);

module.exports = router