const EventEmitter = require('events')
const Logger = require('./logger')
const logger = new Logger()
logger.on('a', (args) => {
    console.log('Here event is registered.', args)
})
logger.log('Hey! this is demo msg.')