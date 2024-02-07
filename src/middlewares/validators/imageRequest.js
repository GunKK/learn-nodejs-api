const imageRequest = async (req, res, next) => {
    if (req.fileValidationError) {
        const error = req.fileValidationError;
        res.status(500).json({
            message: `Có lỗi xảy ra! ${error}`,
            error: 1,
        })
    } else {
        next();
    }
}

module.exports = {
    imageRequest
}