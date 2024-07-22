const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('a', (args) => {
    console.log('Here event is registered.', args)
})
emitter.emit('a', {id: 1, name: 'test'})