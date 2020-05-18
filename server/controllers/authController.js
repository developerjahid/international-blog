const { validationResult } = require('express-validator')

//user model
const User = require('../models/User')

exports.signupGetController = (req, res, next) => {}
exports.signupPostController = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body

    try {
        //see if user already exists
        let user = await User.findOne({ email })
        if (user) {
            res.status(400).json({ errors: [{ msg: 'User already exists.' }] })
        }
        //get user gravatar

        //encrypt password

        // return jsonwentoken
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
}

exports.loginGetController = (req, res, next) => {}
exports.loginPostController = (req, res, next) => {}

exports.logoutController = (req, res, next) => {}
