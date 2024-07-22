const { getUserByUserEmail } = require('./auth.service')
const {compareSync } = require('bcrypt')
const { sign } = require('jsonwebtoken')

module.exports = {
    login: (req, res) => {
        const body = req.body
        getUserByUserEmail(body.email, (err, results) => {
            if (err) {
                console.log(err)
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "Invalid Email or Password."
                })
            }
            const result = compareSync(body.password, results.password)
            if (result) {
                results.password = undefined
                const jsonToken = sign({result: results}, process.env.SECRET_KEY , {
                    expiresIn: '1h'
                })
                return res.json({
                    success: 1,
                    message: "Logged in successfully.",
                    token: jsonToken
                })
            } else {
                return res.json({
                    success: 0,
                    message: "Invalid Email or Password."
                })
            }
        })
    }
}