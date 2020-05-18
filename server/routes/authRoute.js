const router = require('express').Router()
const { check } = require('express-validator')

const {
    signupGetController,
    signupPostController,
    loginGetController,
    loginPostController,
    logoutController,
} = require('../controllers/authController')

router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please provide a vaild email.').isEmail(),
        check(
            'password',
            'Please provide a password with 6 or more characters.'
        ).isLength({ min: 6 }),
    ],
    signupPostController
)

module.exports = router
