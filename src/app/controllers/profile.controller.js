require('dotenv').config();
const { User } = require("../../models")

class ProfileController {
    async uploadAvatar(req, res) { 
        try {
            const { file, user } = req;
            const avatarPath =  (process.env.BASE_URL || '127.0.0.1') + ':' +  (process.env.PORT || 5000) + '\\uploads\\avatar\\' + file.filename;
            const uploadUser = await User.findOne({
                where: {
                    email: user.email
                }
            });
            uploadUser.avatar = avatarPath;
            await uploadUser.save();
            res.status(200).json({
                'message': 'upload file success', 
                uploadUser
            })
        } catch (error) {
            res.status(500).json({
                message: `Có lỗi xảy ra! ${error.message}`,
                error: 1,
            })
        }
    }
}

module.exports = new ProfileController();