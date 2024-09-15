import { useSelector } from "react-redux";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { RemoveFromCart } from "../actions/CartActions";
import { IncrementQuantity } from "../actions/CartActions";
import { DecrementQuantity } from "../actions/CartActions";
import SetCurrentProduct from "../actions/SetCurrentProduct";




function Cart() {

    const cartItems = useSelector(state => state.cart.cartItems);
    const cartCounter = useSelector(state => state.cart.cartCounter);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const deliveryCharges = useSelector(state => state.cart.deliveryCharges);
    const grandTotal = useSelector(state => state.cart.grandTotal);

    let navigate = useNavigate()

    let dispatch = useDispatch()

    let handleRemove = (id) => {
        dispatch(RemoveFromCart(id))
    }

    const handleIncrement = (id) => {
        dispatch(IncrementQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(DecrementQuantity(id));
    };

    const handleImageClick = (product) => {
        dispatch(SetCurrentProduct(product))
        navigate(`/details/${product._id}`)
    }



    return (

        <>
            <Navbar />
            <div className="container bg-white ">

                {cartItems.length ?
                    <div className='row'>
                        <h3 className='text center p-0 py-4 mb-4 mt-3'>Product Details</h3>

                        <div className=" col-md-8 container border p-3">
                            {/* Header Row */}
                            <div className="row border-bottom py-3 d-none d-md-flex">
                                <div className="col-md-5">
                                    <h5>Product</h5>
                                </div>
                                <div className="col-md-2">
                                    <h5 className="text-center">Remove</h5>
                                </div>
                                <div className="col-md-1">
                                    <h5 className="text-center">Size</h5>
                                </div>
                                <div className="col-md-1">
                                    <h5 className="text-center">Price</h5>
                                </div>
                                <div className="col-md-2">
                                    <h5 className="text-center">Qty</h5>
                                </div>
                                <div className="col-md-1">
                                    <h5 className="text-center">Total</h5>
                                </div>
                            </div>

                            {/* Cart Items */}
                            <div className="container p-0">
                                {cartItems.map(item => (
                                    <div className="row py-3 align-items-center border-bottom" key={item._id}>
                                        {/* Product Image and Title */}
                                        <div className="col-12 col-md-5 d-flex align-items-center mb-2 mb-md-0">
                                            <img
                                                src={item.images[0]}
                                                alt={item.title}
                                                style={{ width: "80px", height: "80px" }}
                                                onClick={() => handleImageClick(item)}
                                            />
                                            <h6 className="ps-3">{item.title}</h6>
                                        </div>

                                        {/* Remove Button (Stacks for small screens) */}
                                        <div className="col-6 col-md-2 mb-2 mb-md-0 text-md-center">
                                            <Link
                                                onClick={() => handleRemove(item._id)}
                                                className="btn btn-danger btn-sm"
                                            >
                                                Remove
                                            </Link>
                                        </div>

                                        {/* Size */}
                                        <div className="col-6 col-md-1 text-center mb-2 mb-md-0">
                                            <p>{item.selectedSize || item.size[0]}</p>
                                        </div>

                                        {/* Price */}
                                        <div className="col-6 col-md-1 text-center mb-2 mb-md-0">
                                            <p>{item.price}</p>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className="col-6 col-md-2 text-center mb-2 mb-md-0">
                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-outline-secondary btn-sm" onClick={() => handleIncrement(item._id)}>+</button>
                                                <span className="mx-2">{item.quantity}</span>
                                                <button className="btn btn-outline-secondary btn-sm" onClick={() => handleDecrement(item._id)}>-</button>
                                            </div>
                                        </div>

                                  
                                        <div className="col-6 col-md-1 text-center">
                                            <p>{item.total_item_price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>









                        <div className='col-md-4'>
                            <h4 className="mb-4 text-center">Price Details ({cartCounter} items)</h4>
                            <div className=' border p-2 mx-2 pb-5'>
                                <div className='d-flex justify-content-between px-2 m-3'>
                                    <h5>Total Product Price</h5> <h5>₹{totalPrice.toFixed(2)}</h5>
                                </div>

                                <div className='d-flex justify-content-between px-2 m-3'>
                                    <h5> Delivery Charges </h5> <h5> ₹{deliveryCharges.toFixed(2)} </h5>
                                </div>


                                <hr />
                                <div className='d-flex justify-content-between px-2 m-3'>
                                    <h5> Order Total </h5> <h5>₹{grandTotal.toFixed(2)}</h5>
                                </div>
                                <hr />
                                <Link className='float-end btn btn-success' to='/payment'>Continue</Link>
                            </div>
                        </div>
                    </div>
                    :
                    <h1 className='text-center mt-5 pt-5'>No Items in your Cart</h1>}
            </div>
        </>
    )
}

export default Cart