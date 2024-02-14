const express = require('express');
const TripController = require('../app/controllers/trip.controller');
const { checkIdExists } = require('../middlewares/validators/checkIdExist');
const { Trip } = require("../models");
const { verifyToken } = require('../middlewares/auth/verifyToken');
const { checkRole } = require('../middlewares/auth/checkRole');
const { RoleEnum } = require('../utils/enum');
const router = express.Router();    

router.get('/', TripController.index);
router.post('/', [verifyToken, checkRole([RoleEnum.Admin])], TripController.store);
router.get('/:id', checkIdExists(Trip) ,TripController.show);
router.put('/:id', [verifyToken, checkRole([RoleEnum.Admin])], checkIdExists(Trip), TripController.update);
router.delete('/:id', [verifyToken, checkRole([RoleEnum.Admin])], checkIdExists(Trip), TripController.destroy);

module.exports = router