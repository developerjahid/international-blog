const router = require('express').Router()
const { check } = require('express-validator')

//require middleware
const auth = require('../middleware/auth')

const {
    signupGetController,
    signupPostController,
    loginGetController,
    loginPostController,
    logoutController,
} = require('../controllers/authController')

//signup auth post
router.post(
    '/signup',
    //express validator middleware
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

//signup auth - directly login
router.get('/signup', auth, signupGetController)

//login post
router.post(
    '/login', //express validator middleware
    [
        check('email', 'Please provide a vaild email.').isEmail(),
        check('password', 'Password is required.').exists(),
    ],
    loginPostController
)

//login get
router.get('/login', auth, loginGetController)

//logout
router.post('/', logoutController)

module.exports = router
