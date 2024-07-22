const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {title: 'Node app', message: 'This is pug template of node'})
})

module.exports = router