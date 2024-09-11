
let Product = require('../model/product')

let addProducts = async (req,res) =>{
    let {productId,title,category,subCategory,price,images,rating,count,description,sizes,colors} = req.body
    let product = new Product({
        productId,title,category,subCategory,price,images,rating,count,description,sizes,colors 
    })
    await product.save()

    res.status(201).json({
        message: "Product created successfully",
        product: product,
    });
}

module.exports = addProducts