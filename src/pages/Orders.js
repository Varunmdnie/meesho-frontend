import { useSelector } from "react-redux"
import Navbar from "../components/Navbar"



function Orders() {

    let cartItems = useSelector(state => state.cart.cartItems)


    return (
        <>
            <Navbar />
            <div className="container mt-4" >
                <div className="row mb-4 py-4 " >


                    {cartItems.map(item => (


                        <div className="row border py-4" key={item.id}>
                            <div className='col-md-5 d-flex'>
                                <img src={item.image} alt={item.title} style={{ width: "80px", height: "80px" }} />
                                <div>
                                <h6 className='ps-3'>{item.title}</h6>
                                <h4 className='ms-5 btn-light btn'>quantity : {item.quantity}</h4>
                                {/* <span>quantity:{item.quantity}</span> */}
                                </div>
                                
                                
                                
                            </div>
                            
                           
                            <div className='col-md-1'>
                                <p className='text-center rounded-pill text-muted'>ready for delivery</p>
                            </div>
                          

                           
                            

                        </div>
                    ))}
                    <hr />
                </div>
            </div>








        </>
    )
}

export default Orders