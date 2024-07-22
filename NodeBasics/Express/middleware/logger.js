function log(req, res, next) {
    console.clear()
    console.log('Logging')
    next()
}

module.exports = log