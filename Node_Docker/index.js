const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Docker Test First")
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Runing it...')
})