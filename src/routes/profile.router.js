const express = require('express');
const ProfileController = require('../app/controllers/profile.controller');
const { upload } = require('../utils/uploadImage');
const { imageRequest } = require('../middlewares/validators/imageRequest');
const { verifyToken } = require('../middlewares/auth/verifyToken');
const router = express.Router();


router.post('/upload_avt',verifyToken , upload('avatar').single('image'), imageRequest, ProfileController.uploadAvatar);

module.exports = router;
