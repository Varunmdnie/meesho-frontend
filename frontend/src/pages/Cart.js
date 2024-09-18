import { useSelector } from "react-redux";
import {React, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import {  IncrementQuantity, DecrementQuantity, updateCartCount } from "../actions/CartActions";
import SetCurrentProduct from "../actions/SetCurrentProduct";
import {  toast, ToastContainer } from 'react-toastify';




function Cart() {

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [deliveryCharges, setDeliveryCharges] = useState(50);
   

    let navigate = useNavigate()

    let dispatch = useDispatch()

    let handleRemove = (id, size) => {
        // dispatch(RemoveFromCart(id))

        fetch('http://localhost:4000/api/cart/removeFromCart',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                userId:JSON.parse(localStorage.getItem('loggedInUser'))._id,
                productId: id,
                size: size
            })
        }).then((res) => res.json())
        .then((data) => {
            if(data.status === 'success'){
                setCartItems(data.cart.items);
                setTotalPrice(data.cart.totalPrice);
                dispatch(updateCartCount(data.cart.items.length))
                toast.success('Item removed from cart')
            }else{
                toast.error(data.message)
            }
        }).catch((err) => console.log(err))
    }

    const handleIncrement = (id) => {
        // dispatch(IncrementQuantity(id));
        fetch('http://localhost:4000/api/cart/incrementItem',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                userId:JSON.parse(localStorage.getItem('loggedInUser'))._id,
                productId: id,
                // size: size
            })
        }).then((res) => res.json())
        .then((data) => {
            if(data.status === 'success'){
                setCartItems(data.cart.items);
                setTotalPrice(data.cart.totalPrice);
                dispatch(updateCartCount(data.cart.items.length))
                toast.success('quantity increased')
            }else{
                toast.error(data.message)
            }
        }).catch((err) => console.log(err))
    };

    const handleDecrement = (id) => {
        // dispatch(DecrementQuantity(id));
        fetch('http://localhost:4000/api/cart/decrementItem',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                userId:JSON.parse(localStorage.getItem('loggedInUser'))._id,
                productId: id,
                // size: size
            })
        }).then((res) => res.json())
        .then((data) => {
            if(data.status === 'success'){
                setCartItems(data.cart.items);
                setTotalPrice(data.cart.totalPrice);
                dispatch(updateCartCount(data.cart.items.length))
                toast.success('quantity decreased')
            }else{
                toast.error(data.message)
            }
        }).catch((err) => console.log(err))
    };

    const handleImageClick = async (product) => {                   
        fetch('http://localhost:4000/api/products/getProductById',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                productId: product.productId,
            })
        }).then(res=> res.json()).then((data) => {
            if(data.success){
                dispatch(SetCurrentProduct(data.product))
                navigate(`/details/${product._id}`)
            }else{
                toast.error(data.message)
            }
        })

    }
    

    //fetching data backend to frontend
    useEffect(() =>{
        fetch('http://localhost:4000/api/cart/fetchCart',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                userId:JSON.parse(localStorage.getItem('loggedInUser'))._id
            })
        }).then((res) => res.json())
        .then((data) => {
            if(data.status === 'success'){
                setCartItems(data.cart.items);
                setTotalPrice(data.cart.totalPrice);
                dispatch(updateCartCount(data.cart.items.length))
            }else{
                toast.error(data.message)
            }
        }).catch((err) => console.log(err))

       
    },[])



    return (

        <>
        {/* <ToastContainer autoClose='2000' position="top-right" /> */}
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
                                                src={item.details.image}
                                                alt={item.title}
                                                style={{ width: "80px", height: "80px" }}
                                                onClick={() => handleImageClick(item)}
                                            />
                                            <h6 className="ps-3">{item.title}</h6>
                                        </div>

                                        {/* Remove Button (Stacks for small screens) */}
                                        <div className="col-6 col-md-2 mb-2 mb-md-0 text-md-center">
                                            <Link
                                                onClick={() => handleRemove(item._id, item.size )}
                                                className="btn btn-danger btn-sm"
                                            >
                                                Remove
                                            </Link>
                                        </div>

                                        {/* Size */}
                                        <div className="col-6 col-md-1 text-center mb-2 mb-md-0">
                                            <p>{item.size}</p>
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
                                            <p>{(item.price*item.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>









                        <div className='col-md-4'>
                            <h4 className="mb-4 text-center">Price Details ({cartItems.length} items)</h4>
                            <div className=' border p-2 mx-2 pb-5'>
                                <div className='d-flex justify-content-between px-2 m-3'>
                                    <h5>Total Product Price</h5> <h5>₹{totalPrice.toFixed(2)}</h5>
                                </div>

                                <div className='d-flex justify-content-between px-2 m-3'>
                                    <h5> Delivery Charges </h5> <h5> ₹{deliveryCharges.toFixed(2)} </h5>
                                </div>


                                <hr />
                                <div className='d-flex justify-content-between px-2 m-3'>
                                    <h5> Order Total </h5> <h5>₹{(totalPrice+deliveryCharges).toFixed(2)}</h5>
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