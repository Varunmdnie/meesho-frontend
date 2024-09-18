let express = require('express')
let orderAdd = require('../controllers/orderControllers')
let router = express.Router()

router.post('/orderAdd',orderAdd)

module.exports = router