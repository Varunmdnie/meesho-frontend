let express = require('express')
let router = express.Router()
let {addProducts} = require('../controllers/productControllers')
let {getProducts, getProductById, updateStock} = require('../controllers/productControllers')
let {getProductsOfSeller} = require('../controllers/productControllers')


router.post('/addProduct',addProducts)
router.get('/getProducts',getProducts)
router.post('/getProductById',getProductById)
router.post('/getProductsOfSeller',getProductsOfSeller)
router.post('/updateStock',updateStock)

module.exports = router