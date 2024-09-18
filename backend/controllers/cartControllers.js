
let Cart = require('../model/cart')
let stripe = require('stripe')(process.env.STRIPE_KEY)


let cartAdd = async (req, res) => {
    try {

        const { userId, productId, quantity, size, product, price } = req.body;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({
                userId,
                items: [{ productId, quantity, price, size, details: {image:product.images[0], name:product.title} }],
                totalPrice: quantity * product.price
            });
        } else { 
            // If cart exists, update it
            const existingProductIndex = cart.items.findIndex(item => item.productId.toString() === productId && item.size === size);

            if (existingProductIndex >= 0) {
                
                cart.items[existingProductIndex].quantity += quantity;
                cart.items[existingProductIndex].price = price;
            } else {
                // Otherwise, add a new product to the cart
                cart.items.push({ productId, quantity, price, size, details:{image:product.images[0], name:product.title} });
            }

            // Recalculate the total price
            cart.totalPrice = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);// 50 delivery price
        }

        
        await cart.save();

        res.send({status:'success', message: 'Item added to cart successfully', cart})

    } catch (error) {
        res.send({status:'failed', message: error.message})
    }
}

let fetchCart = async (req, res) =>{
    try {
        const {userId} = req.body;
    
        const cart = await Cart.findOne({ userId });
    
        if (!cart) {
          return res.status(404).json({ message: "Cart is empty" });
        }

        res.status(200).json({status:'success', message: 'Cart saved successufully', cart});
      } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).json({ message: "Failed to fetch cart" });
      }
}

let incrementItem = async (req, res) => {
    try {
        const { userId, productId, size } = req.body;

        let cart = await Cart.findOne({ userId });
        // console.log(productId);
        // console.log(cart.items.productId.toString());
        
        
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const existingProductIndex = cart.items.findIndex(item => item._id.toString() === productId);
        // console.log(existingProductIndex);
        
        if (existingProductIndex >= 0) {
            cart.items[existingProductIndex].quantity += 1;
        } else {
            return res.status(404).json({ message: "Item not found in cart" });
        }

        cart.totalPrice = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0); // Recalculate total price including delivery cost

        await cart.save();
        res.status(200).json({status: 'success', message: 'Item quantity incremented', cart});

    } catch (error) {
        res.status(500).json({ status: 'failed', message: error.message });
    }
};

let decrementItem = async (req, res) => {
    try {
        const { userId, productId, size } = req.body;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const existingProductIndex = cart.items.findIndex(item => item._id.toString() === productId);

        if (existingProductIndex >= 0) {
            if (cart.items[existingProductIndex].quantity > 1) {
                cart.items[existingProductIndex].quantity -= 1;
            } else {
                return res.status(400).json({ message: "Cannot decrement. Minimum quantity reached." });
            }
        } else {
            return res.status(404).json({ message: "Item not found in cart" });
        }

        cart.totalPrice = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0); // Recalculate total price including delivery cost

        await cart.save();
        res.status(200).json({status: 'success', message: 'Item quantity decremented', cart});

    } catch (error) {
        res.status(500).json({ status: 'failed', message: error.message });
    }
};

let removeFromCart = async (req, res) => {
    try {
        const { userId, productId, size } = req.body;
        // console.log(userId);
        
        let cart = await Cart.findOne({userId:userId})

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const existingProductIndex = cart.items.findIndex(item => item._id.toString() === productId);

        if (existingProductIndex >= 0) {
            cart.items.splice(existingProductIndex, 1); // Remove the item
        } else {
            return res.status(404).json({ message: "Item not found in cart" });
        }

        if (cart.items.length === 0) {
            cart.totalPrice = 0; // If the cart is empty, set the total price to 0
        } else {
            cart.totalPrice = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0); // Recalculate total price including delivery cost
        }

        await cart.save();
        res.status(200).json({status: 'success', message: 'Item removed from cart', cart});

    } catch (error) {
        res.status(500).json({ status: 'failed', message: error.message });
    }
};


let makePayment = async (req,res) =>{

    const { amount, cart } = req.body; 
// console.log(amount);

    try {

        const lineItems = cart.items.map((item)=>({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.details.name,
                },
                unit_amount:item.price*100,
            },
            quantity:item.quantity
        }));

        const shippingCharge = {
            price_data: {
                currency: "inr",
                product_data: {
                    name: "Shipping Charge",
                },
                unit_amount: 50 *100,
            },
            quantity: 1,
        };
        
        
        lineItems.push(shippingCharge);

    const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: lineItems,
    success_url: `http://localhost:3000/success/`,
    cancel_url: `http://localhost:3000/cancel`,
  },{apiKey: process.env.STRIPE_KEY})
      
        res.json({ id: session.id });
      } catch (error) {
        console.error('Error creating Stripe session:', error.message);
        res.status(500).json({ error: 'An error occurred, please try again later.', error });
      }
      

}




module.exports = {cartAdd, fetchCart, removeFromCart, decrementItem, incrementItem,makePayment};
