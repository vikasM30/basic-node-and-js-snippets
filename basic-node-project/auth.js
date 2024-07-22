require('dotenv').config()
const express = require('express')
const app = express()
const authRouter = require("./api/auth/auth.router")

// converting json obj to js obj, as user passes json obj
app.use(express.json())

app.use("/api/auth", authRouter)
app.listen(process.env.APP_PORT2, () => {
    console.log("server up and running on port: ", process.env.APP_PORT2)
})