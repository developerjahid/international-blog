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
    '/',
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
router.get('/', auth, signupGetController)

//login post
router.post('/login', loginPostController)

//login get
router.post('/login', loginGetController)

//login get
router.post('/', logoutController)

module.exports = router
