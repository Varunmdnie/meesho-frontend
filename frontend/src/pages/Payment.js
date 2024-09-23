
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import Stripe from './Stripe'
import { useState,useEffect } from "react";
import {toast} from 'react-toastify';
import { useDispatch } from "react-redux";
import { updateCartCount } from "../actions/CartActions";




function Payment() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    const [paymentMode, setPaymentMode] = useState('cod')
    const [cartItems, setCartItems] = useState([]);
    const [cart, setCart] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [deliveryCharges, setDeliveryCharges] = useState(50);

    const [name,setName] = useState('')
    const [address,setAddress] = useState('')
    const [email,setEmail] = useState('')
    const [phoneNumber,setPhoneNumber] = useState()

   



    useEffect(() =>{
        fetch('http://localhost:4000/api/cart/fetchCart',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':localStorage.getItem('userToken'),
            },
            body:JSON.stringify({
                userId:JSON.parse(localStorage.getItem('loggedInUser'))._id
            })
        }).then((res) => res.json())
        .then((data) => {
            if(data.status === 'success'){
                setCartItems(data.cart.items);
                setTotalPrice(data.cart.totalPrice);
                setCart(data.cart)
                console.log(totalPrice);
                
               
            }else{
                toast.error(data.message)
            }
        }).catch((err) => console.log(err))
   
    },[])

    let handleOrder = async (e) =>{
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:4000/api/order/orderAdd", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name:name,
                    address:address,
                    email:email,
                    phoneNumber:phoneNumber,
                    userId: JSON.parse(localStorage.getItem('loggedInUser')),
                    cart:cart

                })
            });

            const data = await response.json();


            // Handle successful or failed login attempt
            if (data.status === 'success') {

                toast.success('Order Placed Successfully');
               setTimeout(() => {
                 dispatch(updateCartCount(0))
                //  navigate('/orders')
               }, 1000);

            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error('Error registering:', error);
        }
    }
    

  
    

    return (
        <>
            <Navbar />
            <section>
                  <form onSubmit={handleOrder}>
                <div className="row container mt-5">
               
                    <div className="col-md-8 mb-4">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Biling details</h5>
                            </div>
                            <div className="card-body">
                                <form>

                                    <div className="row mb-4">
                                        <div className="col">
                                            <div data-mdb-input-init className="form-outline">
                                                <input placeholder="name" type="text" id="form6Example1" className="form-control" required
                                                value={name} onChange={(e) => setName(e.target.value)}/>

                                            </div>
                                        </div>
                       
                                    </div>


                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <input placeholder="address" type="text" id="form6Example4" className="form-control"
                                        value={address} onChange={(e) => setAddress(e.target.value)} />

                                    </div>


                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <input placeholder="email" type="email" id="form6Example5" className="form-control"
                                        value={email} onChange ={(e) => setEmail(e.target.value)} />

                                    </div>


                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <input placeholder="phone number" type="number" id="form6Example6" className="form-control"
                                        value = {phoneNumber} onChange = {(e) => setPhoneNumber(e.target.value)} />

                                    </div>

                                    <hr className="my-4" />

                                    <h5 className="mb-4">Payment</h5>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm1"
                                            checked={paymentMode === 'cod'} onChange={() => setPaymentMode('cod')} />
                                        <label className="form-check-label" for="checkoutForm1">
                                            Cash on delivery
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm2"
                                            checked={paymentMode === 'stripe'} onChange={() => setPaymentMode('stripe')} />
                                        <label className="form-check-label" for="checkoutForm2">
                                            Stripe
                                        </label>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Summary</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products
                                        <span>₹{totalPrice}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        delivery charges
                                        <span>₹{deliveryCharges}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>

                                        </div>
                                        <span><strong>₹{totalPrice+deliveryCharges}</strong></span>
                                    </li>
                                </ul>
                            </div>


                        </div>
                        <div className="d-flex justify-content-center">
                            {paymentMode === 'cod' ? <button className="btn btn-primary w-100 m-2" disabled={!name || !email || !address || !phoneNumber}>Place order</button> : <Stripe name={name} email={email} address={address} phoneNumber={phoneNumber} />}
                        </div>

                    </div>
                  
                </div>
                  </form>
            </section>
            <Footer />
        </>
    )
}

export default Payment
