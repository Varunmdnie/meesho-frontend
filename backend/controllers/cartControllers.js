
let Cart = require('../model/cart')

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
                // If the product with the same size already exists in the cart, update the quantity
                cart.items[existingProductIndex].quantity += quantity;
                cart.items[existingProductIndex].price = price; // Update price in case it has changed
            } else {
                // Otherwise, add a new product to the cart
                cart.items.push({ productId, quantity, price, size, details:{image:product.images[0], name:product.title} });
            }

            // Recalculate the total price
            cart.totalPrice = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0) + 50;// 50 delivery price
        }

        // Save the cart
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

        cart.totalPrice = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0) + 50; // Recalculate total price including delivery cost

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

        cart.totalPrice = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0) + 50; // Recalculate total price including delivery cost

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
            cart.totalPrice = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0) + 50; // Recalculate total price including delivery cost
        }

        await cart.save();
        res.status(200).json({status: 'success', message: 'Item removed from cart', cart});

    } catch (error) {
        res.status(500).json({ status: 'failed', message: error.message });
    }
};




module.exports = {cartAdd, fetchCart, removeFromCart, decrementItem, incrementItem};
