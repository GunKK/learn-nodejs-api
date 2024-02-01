const checkIdExists = (Model) => {
    return async (req, res, next) => {
        const { id } = req.params;
            const data = await Model.findOne({
                where: {
                    id,
                }
            });
            if (data) {
                next();
            } else {
                res.status(404).json({
                    'message': `not found with id : ${id}`, 
                })
            }
    }
}

module.exports = {
    checkIdExists
}