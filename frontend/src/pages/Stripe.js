import { loadStripe } from '@stripe/stripe-js';
import React from 'react';


const stripePromise = loadStripe('pk_test_51PztpfDDPlSyDR3C1kmle428OpUH1YZa5EfJJ0pbivjDVRHwbf3AtSLLIIxIAfjNYIEy5dy0qE8D9XJsCGSjaPjO00Skxkh8XN');

function Stripe() {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Create Checkout session on your backend
    const response = await fetch('http://localhost:4000/api/cart/makePayment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 1000 }) // Example amount: ₹1000
    });

    const { id: sessionId } = await response.json();

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      console.error("Error redirecting to Stripe Checkout:", error);
    }
  };

  return (
    <button onClick={handleCheckout}>
      Checkout with Stripe
    </button>
  );
}
 
export default Stripe;