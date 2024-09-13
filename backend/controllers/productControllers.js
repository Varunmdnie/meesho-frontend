
let Product = require('../model/product')

let addProducts = async (req,res) =>{
   try {
     let {title,category,subCategory,price,images,rating,count,description,sizes,colors, loggedInUser} = req.body
     let product = new Product({
         title,category,subCategory,price,images,rating,count,description,sizes,colors, seller_id: loggedInUser._id
     })
     await product.save()
 
     res.status(201).json({
        status:'success',
         message: "Product created successfully",
         product: product,
     });
   } catch (error) {
    res.send({status:'failed', message: error.message})
   }
}

let getProducts = async (req,res) =>{
    try{
        let products = await Product.find({})
        res.json({success:true,products})

    }
    catch{
        console.log(error)
        res.json({success:false,message:error.message})


    }
}
let getProductsOfSeller = async (req,res) =>{
    try{
        let products = await Product.find({seller_id: req.body.loggedInUser._id})
        res.json({success:true,products})

    }
    catch{
        console.log(error)
        res.json({success:false,message:error.message})


    }
}

module.exports = {addProducts,getProducts, getProductsOfSeller}