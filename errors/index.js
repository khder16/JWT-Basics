const CustomAPIError = require('./custom-error')
const unauthenticatedError = require('./unauthenticated')
const BadRequest = require('./bad-requist')


class unauthenticatedError extends CustomAPIError {
    constructor(message){
    super(message)
    this.statusCode = 401
    }
}

module.exports = {CustomAPIError,
    unauthenticatedError,
    BadRequest
}