let mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
    productId:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    subCategory:{
        type:String,
        required:true
    },
    price: { 
        type: Number, 
        required: true 
    },
    images: {
         type: [String],
          required: true 
        },
    rating: {
         type: Number, 
         required: false 
        },
    count: {
         type: Number,
         required: false
        },
    description: {
         type: String, 
         required: true 
        },
    sizes: {
         type: [String],
          required: false 
        },
    colors: {
         type: [String],
          required: false 
        },



})

let Product = mongoose.model('Product',productSchema)
module.exports = Product