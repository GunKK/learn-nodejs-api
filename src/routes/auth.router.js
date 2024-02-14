const express = require('express');
const AuthController = require('../app/controllers/auth.controller');
const router = express.Router();    

router.post('/sign_up', AuthController.register);
router.post('/login', AuthController.login);
router.delete('/logout', AuthController.logout);

module.exports = router