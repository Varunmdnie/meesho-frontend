
import { Link} from "react-router-dom";
import Footer from "../components/Footer"

import SellerNavbar from "../components/SellerNavbar";
import { useEffect, useState } from "react";

function Seller() {
    // let navigate = useNavigate()

    let [data, setData] = useState([])
    useEffect(() => {
        // let loggedInUser=localStorage.getItem('loggedInUser')  
        // if(!loggedInUser)         {
           
        //     navigate('/')
        // }      
        fetch('http://localhost:4000/api/products/getProductsOfSeller', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({loggedInUser:JSON.parse(localStorage.getItem("loggedInUser"))})
        }).then((res) => res.json())
            .then((data) => setData(data.products)).catch((err) => console.log(err))

    }, [])



    return (
        <>

            <SellerNavbar />
            <div class="container mt-5">
                <div className="container text-muted border  rounded shadow mb-3">
                    <h2 class="text-center mb-4">Your listed Products</h2>

                </div>

                <div className="container border  rounded shadow p-3 mb-3 bg-white p-5">
                    <Link to='/seller/add' className="btn btn-primary">Add products </Link>
                   
                
                    <div className="row">
                        {
                            data.map((product, i) => (
                                <div key={i}className="col-lg-2 col-sm-6 col-md-4 d-flex my-3 ">

                                        <div className="card" >
                                            <img src={product.images[0]} className="card-img-top w-auto" alt={product.title} style={{objectFit:'contain', maxHeight:'220px'}}  />

                                            <div className="card-body">
                                                <h6 className="card-title text-muted">{product.title}</h6>

                                                <div className="d-flex">
                                                    <h4 className="me-1 text-dark">₹{product.price} </h4>
                                                    <h5><sub className="text-muted"> onwards</sub></h5>
                                                </div>
                                                {/* <h6 className="btn btn-light btn-sm text-muted rounded-pill">free delivery</h6>
                                                <br />
                                                <div className="d-flex">
                                                    <p className="card-text btn btn-success btn-sm rounded-pill me-2">{product.rating}✩</p>
                                                    <p><sub className="text-muted">{product.count} Reviews</sub></p>

                                                </div> */}
                                                


                                            </div>
                                        </div>

                                    </div>
                            ))
                        }
                    </div>



                </div>
            </div>
            <Footer />
        </>
    )
}

export default Seller