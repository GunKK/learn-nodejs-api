// arrRole = ['admin'] 
const checkRole = (arrRole) => {
    return (req, res, next) => {
        const { user } = req;
        if (arrRole.findIndex((ele) => ele === user.role) > -1 ) {
            next();
        } else {
            res.status(403).json({message: '403 Forbidden'})
        }
    }
}

module.exports = {
    checkRole
}