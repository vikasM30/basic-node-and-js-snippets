// require('dotenv').config()
const helmet = require('helmet') // help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.
const morgan = require('morgan') // HTTP request logger.
const config = require('config')
const logger = require('./middleware/logger')
const courses = require('./routes/courses')
const home = require('./routes/home')
const express = require('express')
const app = express()
const debug = require('debug')('app:startup')

app.use(express.json()) // express.json() returns a middleware function whose job is to read the req and if there is json obj in body of the req, it will parse it and set req.body prop.
                        // json ->  router
                        // to support JSON-encoded bodies
app.use(express.urlencoded({
    extended: true
})) // key=value&key=value
// assuming POST: name=foo&color=red            <-- URL encoding
// assuming POST: {"name":"foo","color":"red"}  <-- JSON encoding

app.use(express.static('public'))
app.use(helmet())
if (app.get('env') === 'development') {
    app.use(morgan('combined'))
    console.log('Development mode')
    // debug('hi')
}
// $env:NODE_ENV="production"
// debug(config.get('name'))
// debug(config.get('mail.host'))
// debug(config.get('mail.password'))
app.use(logger)
app.set('view engine', 'pug')
app.use('/api/courses', courses)
app.use('/', home)


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listening to port ${port}...`)
})