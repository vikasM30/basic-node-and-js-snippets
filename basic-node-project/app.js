require('dotenv').config()
const path = require("path")
const express = require('express')
const app = express()
const userRouter = require("./api/users/user.router")
var cors = require('cors')
app.use(cors())
// converting json obj to js obj, as user passes json obj
app.use(express.json())
app.get("/", (r,q)=>{q.sendFile(path.resolve('x.html'))})
app.use("/api/users", userRouter)
app.listen(process.env.APP_PORT1, () => {
    console.log("server up and running on port: ", process.env.APP_PORT1)
})