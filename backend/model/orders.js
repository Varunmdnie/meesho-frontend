let mongoose = require('mongoose')

let orderSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    modeOfPayment:{
        type:String,
        required:true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }

})

let Order = mongoose.model('Order',orderSchema)
module.exports = Order