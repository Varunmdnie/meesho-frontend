
let express = require('express')
let {register,login,logout,cart,forgetPassword,resetPassword}  = require('../controllers/userController')

let verify_token = require('../middleware/userVerification')

let router = express.Router()

router.post('/register',register)
router.post('/login',login)
router.post('/logout',logout)
router.post('/forgetPassword',forgetPassword)
router.post('/resetPassword/:token',resetPassword)
router.post('/cart',verify_token,cart)


module.exports = router
