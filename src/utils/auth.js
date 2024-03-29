const jwt = require('jsonwebtoken');

const generateAccessToken = (data) => {
    return jwt.sign(data, process.env.JWT_ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
}

const generateRefreshToken  = (email) => {
    return jwt.sign({ email }, process.env.JWT_REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
}


module.exports = { 
    generateAccessToken, 
    generateRefreshToken,
}