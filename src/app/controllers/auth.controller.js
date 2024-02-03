const { User, sequelize } = require("../../models");
const helper = require("../../utils/helper");
const { RoleEnum } = require("../../utils/enum");
const jwt = require("jsonwebtoken");
const { generateAccessToken, generateRefreshToken } = require("../../utils/auth");

class AuthController {
    async register(req, res) {
        try {
            const { name, email, password, phone } = req.body;
            const hash =  helper.hashPassword(password);
            const t = await sequelize.transaction();
            try {
                const user = await User.create({
                    name: name,
                    email: email,
                    password: hash,
                    phone: phone,
                    role: RoleEnum.Customer
                }, { transaction: t });
                await t.commit();
                res.status(201).json({
                    'message': 'success', 
                    user
                }) 
            } catch (error) {
                await t.rollback();
                res.status(500).json({
                    message: `Có lỗi xảy ra! ${error.message}`,
                    error: 1,
                })
            }
        } catch (error) {
            res.status(500).json({
                message: `Có lỗi xảy ra! ${error.message}`,
                error: 1,
            })
        }
    }

    async login(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({ 
            where: {
                email,
            }
        });

        const isAuth = helper.comparePassword(password, user.password);
        if (isAuth) {
            const token = generateAccessToken({
                email: user.email,
                role: user.role,
            });

            const refreshToken = generateRefreshToken(email);
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: false,
                maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
            })

            return res.status(200).json({
                token,
                user: {
                    email: user.email,
                    phone: user.phone,
                    role: user.role,
                }
            })
        } else {
            res.status(400).json({
                message: 'Email or password incorrect',
                error: 1,
            })
        }
    }

    async logout(req,res) {
        try {
            res.clearCookie("refreshToken")
            return res.status(200).json({
                message: 'Logout sucesss',
                error: 0
            })
        } catch (error) {
            res.status(500).json({
                message: `Có lỗi xảy ra! ${error.message}`,
                error: 1,
            })
        }
    }
}

module.exports = new AuthController();