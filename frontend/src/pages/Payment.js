import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useSelector } from "react-redux";



function Payment() {

    const deliveryCharges = useSelector(state => state.cart.deliveryCharges);
    const grandTotal = useSelector(state => state.cart.grandTotal);
    const totalPrice = useSelector(state => state.cart.totalPrice);


    return (
        <>
         <Navbar />
            <section>
                <div class="row container mt-5">
                    <div class="col-md-8 mb-4">
                        <div class="card mb-4">
                            <div class="card-header py-3">
                                <h5 class="mb-0">Biling details</h5>
                            </div>
                            <div class="card-body">
                                <form>
                                   
                                    <div class="row mb-4">
                                        <div class="col">
                                            <div data-mdb-input-init class="form-outline">
                                                <input placeholder="first name" type="text" id="form6Example1" class="form-control" />
                                               
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div data-mdb-input-init class="form-outline">
                                                <input placeholder="last name" type="text" id="form6Example2" class="form-control" />
                                               
                                            </div>
                                        </div>
                                    </div>

                                  
                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input placeholder="address" type="text" id="form6Example4" class="form-control" />
                                        
                                    </div>

                                   
                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input placeholder="email" type="email" id="form6Example5" class="form-control" />
                                        
                                    </div>

                               
                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input placeholder="phone number" type="number" id="form6Example6" class="form-control" />
                                    
                                    </div>

                                    <hr class="my-4" />

                                    <h5 class="mb-4">Payment</h5>

                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm1"
                                            checked />
                                        <label class="form-check-label" for="checkoutForm1">
                                            Cash on delivery
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm2" />
                                        <label class="form-check-label" for="checkoutForm2">
                                            Stripe
                                        </label>
                                    </div>

                                    {/* <div class="form-check mb-4">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm3" />
                                        <label class="form-check-label" for="checkoutForm3">
                                            UPI
                                        </label>
                                    </div> */}

                                    {/* <div class="row mb-4">
                                        <div class="col">
                                            <div data-mdb-input-init class="form-outline">
                                                <input type="text" id="formNameOnCard" class="form-control" />
                                                <label class="form-label" for="formNameOnCard">Name on card</label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div data-mdb-input-init class="form-outline">
                                                <input type="text" id="formCardNumber" class="form-control" />
                                                <label class="form-label" for="formCardNumber">Credit card number</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-4">
                                        <div class="col-3">
                                            <div data-mdb-input-init class="form-outline">
                                                <input type="text" id="formExpiration" class="form-control" />
                                                <label class="form-label" for="formExpiration">Expiration</label>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div data-mdb-input-init class="form-outline">
                                                <input type="text" id="formCVV" class="form-control" />
                                                <label class="form-label" for="formCVV">CVV</label>
                                            </div>
                                        </div>
                                    </div> */}

                                    
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 mb-4">
                        <div class="card mb-4">
                            <div class="card-header py-3">
                                <h5 class="mb-0">Summary</h5>
                            </div>
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products
                                        <span>₹{totalPrice}</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                        delivery charges
                                        <span>₹{deliveryCharges}</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>
                                            
                                        </div>
                                        <span><strong>₹{grandTotal}</strong></span>
                                    </li>
                                </ul>
                            </div>

                      
                        </div>
                        <div className="d-flex justify-content-center">
                         <Link to='/orders' className="btn  btn-primary w-100">proceed to checkout</Link>
                         
                        </div>
                        
                       
                    </div>
                   
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Payment
