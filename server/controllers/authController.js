const { validationResult } = require('express-validator')
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//user model
const User = require('../models/User')

//signup post controller
exports.signupPostController = async (req, res) => {
    //express validation
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body

    try {
        //see if user already exists
        let user = await User.findOne({ email })
        if (user) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'User already exists.' }] })
        }

        //get user gravatar
        const avater = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm',
        })

        //make new user
        user = new User({
            name,
            email,
            avater,
            password,
        })

        //encrypt password *under user*
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)

        //save user to database
        await user.save()

        // return jsonwentoken
        const payload = {
            user: {
                id: user.id,
            },
        }
        jwt.sign(
            payload,
            process.env.jwtSecret,
            { expiresIn: 36000 },
            (err, token) => {
                if (err) throw err
                res.json({ token })
            }
        )
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error.')
    }
}

//signup & auto login/payload
exports.signupGetController = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error.')
    }
}

exports.loginGetController = (req, res, next) => {}

exports.loginPostController = (req, res, next) => {}

exports.logoutController = (req, res, next) => {}
