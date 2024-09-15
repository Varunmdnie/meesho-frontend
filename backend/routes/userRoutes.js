
let express = require('express')
let {register,login,logout,cart}  = require('../controllers/userController')

let verify_token = require('../middleware/userVerification')

let router = express.Router()

router.post('/register',register)
router.post('/login',login)
router.post('/logout',logout)
router.post('/cart',verify_token,cart)

module.exports = router
