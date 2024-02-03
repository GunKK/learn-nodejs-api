// arrRole = ['admin'] 
const checkRole = (arrRole) => {
    return (req, res, next) => {
        const { user } = req;
        if (arrRole.findIndex((ele) => ele === user.role) > -1 ) {
            next();
        }
    }
}

module.exports = {
    checkRole
}