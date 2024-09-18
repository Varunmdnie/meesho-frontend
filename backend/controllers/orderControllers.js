
let Order = require('../model/orders')

let orderAdd = async (req,res) =>{
    try {
        const { name, address, email, phoneNumber, modeOfPayment, userId } = req.body;

        // Basic validation
        if (!name || !address || !email || !phoneNumber || !modeOfPayment ||!userId) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Create a new order document
        const order = new Order({
            name,
            address,
            email,
            phoneNumber,
            modeOfPayment,
            userId
        });

        // Save the order to the database
        await order.save();

        // Send success response
        res.status(201).json({ status:'success', message: "Order created successfully", order });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
    
}
module.exports = orderAdd