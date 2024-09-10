import { useSelector } from "react-redux";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { RemoveFromCart } from "../actions/CartActions";
import { IncrementQuantity } from "../actions/CartActions";
import { DecrementQuantity } from "../actions/CartActions";
import SetCurrentProduct from "../actions/SetCurrentProduct";




function Cart(){

    const cartItems = useSelector(state => state.cart.cartItems);
    const cartCounter = useSelector(state => state.cart.cartCounter);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const deliveryCharges = useSelector(state => state.cart.deliveryCharges);
    const grandTotal = useSelector(state => state.cart.grandTotal);

    let navigate = useNavigate()

    let dispatch = useDispatch()

    let handleRemove = (id) =>{
        dispatch(RemoveFromCart(id))
    }

    const handleIncrement = (id) => {
        dispatch(IncrementQuantity(id));
      };
    
      const handleDecrement = (id) => {
        dispatch(DecrementQuantity(id));
      };

      const handleImageClick = (product) =>{
        dispatch(SetCurrentProduct(product))
        navigate(`/details/${product.id}`)
      }



    return(

        <>
        <Navbar />
             <div className="container bg-white ">
                
                {cartItems.length ?
                    <div className='row'>
                        <h3 className='text center p-0 py-4 mb-4 mt-3'>Product Details</h3>

                   
                        <div className="col-md-8 border">

                            
                            <div className="row border-bottom py-3">
                                <div className='col-md-5'> <h5 className=""> Product</h5>
                                </div>
                                <div className='col-md-2'> <h5 className=" text-center"> </h5>
                                </div>
                                <div className='col-md-1'> <h5 className="text-center">Size</h5>
                                </div>
                                <div className='col-md-1'><h5 className="text-center"> Price</h5>
                                </div>
                                <div className='col-md-2'><h5 className="text-center">Qty</h5>
                                </div>
                                <div className='col-md-1'> <h5 className="text-center">Total</h5>
                                </div>
                            </div>




                            <div className="container border-right p-0">
                                {cartItems.map(item => (
                                    
                                 
                                    <div className="row py-4" key={item.id}>
                                        <div className='col-md-5 d-flex'>
                                            <img  src={item.image} alt={item.title} style={{ width: "80px", height: "80px" }} onClick={() => handleImageClick(item)} />
                                            <h6 className='ps-3'>{item.title}</h6>
                                        </div>
                                        <div className='col-md-2'>
                                            <Link onClick={() => handleRemove(item.id)} className='text-end btn btn-primary btn-sm'>remove</Link>
                                        </div>
                                        <div className='col-md-1'>
                                            <p className='text-center'>{item.selectedSize || item.size[0]}</p>
                                        </div>
                                        <div className='col-md-1'>
                                            <p className='text-center'>
                                                {item.price}
                                                </p>
                                        </div>
                                        
                                        <div className='col-md-2'>
                                        <div className=" text-center">
                                        <button className="" onClick={() => handleIncrement(item.id)}>+</button>
                                        <button className='text-center'>{item.quantity}</button>
                                        <button onClick={() => handleDecrement(item.id)}>-</button>
                                        </div> 
                                           
                                        </div>
                                        <div className='col-md-1'>
                                            <p className='text-center'>{item.total_item_price.toFixed(2)}</p>
                                        </div>
                                      
                                    </div>
                                ))}
                                <hr/>
                              
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
                               
                        
                                <hr/>
                                <div className='d-flex justify-content-between px-2 m-3'>
                                    <h5> Order Total </h5> <h5>₹{grandTotal.toFixed(2)}</h5>
                                </div>
                                <hr/>
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