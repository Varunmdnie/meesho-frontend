import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useEffect, useState} from "react";
import {toast} from 'react-toastify';



const stripePromise = loadStripe('pk_test_51PztpfDDPlSyDR3C1kmle428OpUH1YZa5EfJJ0pbivjDVRHwbf3AtSLLIIxIAfjNYIEy5dy0qE8D9XJsCGSjaPjO00Skxkh8XN');


function Stripe({name,email,address,phoneNumber}) {

 
  const [cart,setCart] = useState([])

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
         
            setCart(data.cart)
          
            
        }else{
            toast.error(data.message)
        }
    }).catch((err) => console.log(err))
 
},[])

  const handleCheckout = async () => {
    const stripe = await stripePromise;

  
    const response = await fetch('http://localhost:4000/api/cart/makePayment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
                 'Authorization':localStorage.getItem('userToken') },
      body: JSON.stringify({ 
        cart,
        name,
        email,
        address,
        phoneNumber,
        userId:JSON.parse(localStorage.getItem('loggedInUser'))._id
      }) 
    });

    const { id: sessionId } = await response.json();

    
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      console.error("Error redirecting to Stripe Checkout:", error);
    }
  };



  return (
    <button onClick={handleCheckout} disabled={!name || !email || !address || !phoneNumber} className='btn btn-primary w-100 m-2'>
      Checkout with Stripe
    </button>
  );
}
 
export default Stripe;