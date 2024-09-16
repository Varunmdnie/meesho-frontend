
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
let getProductById = async (req,res) =>{
    try{
      // console.log(req.body);
      
        let product = await Product.findOne({_id: req.body.productId})
        res.json({success:true,product})

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
  catch(err) {  // Changed 'error' to 'err'
    console.error(err);  // Optional: Log the error for debugging purposes
    res.status(500).json({ message: err.message });  // Ensure 'err' is correctly referenced
  }
}

module.exports = {addProducts,getProducts, getProductsOfSeller, getProductById}