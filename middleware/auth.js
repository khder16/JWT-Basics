
const customAPIError = require('../errors/custom-error')
const {unauthenticatedError} = require('../errors/unauthenticated')

const jwt = require('jsonwebtoken')
const authenticationMiddleware = async (req, res, next) => {


    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new unauthenticatedError('No token provided')
    }
    //Bearer قسم المصفوفة حسب السبيس واسند تاني عنصر منها لل توكين اول عنصر هوي 

    const token = authHeader.split(' ')[1]




    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id, username } = decoded
        req.user = { id, username }
        next()

    } catch (error) {
        throw new unauthenticatedError('Not authorized to accses this rout')
    }
}
    module.exports = authenticationMiddleware