let express = require('express')
let router = express.Router()
let addProducts = require('../controllers/productControllers')

router.post('/addProduct',addProducts)

module.exports = router