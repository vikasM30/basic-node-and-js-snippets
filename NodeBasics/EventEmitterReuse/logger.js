const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(msg) {
        console.log(msg)
        this.emit('a', {id: 1, name: 'test'})
    }
}

module.exports = Logger