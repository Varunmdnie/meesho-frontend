
import { Link} from "react-router-dom";
import Footer from "../components/Footer"

import SellerNavbar from "../components/SellerNavbar";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Seller() {
    // let navigate = useNavigate()

    let [data, setData] = useState([])
    useEffect(() => {
        // let loggedInUser=localStorage.getItem('loggedInUser')  
        // if(!loggedInUser)         {
           
        //     navigate('/')
        // }      
        fetch('https://meesho-backend-6mf21sb5z-varuns-projects-3f79aa73.vercel.app/api/products/getProductsOfSeller', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({loggedInUser:JSON.parse(localStorage.getItem("loggedInUser"))})
        }).then((res) => res.json())
            .then((data) => setData(data.products)).catch((err) => console.log(err))

    }, [])

    const updateStock = (id, type) => {
        // dispatch(IncrementQuantity(id));
        fetch('https://meesho-backend-6mf21sb5z-varuns-projects-3f79aa73.vercel.app/api/products/updateStock',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                productId: id,
                type
            })
        }).then((res) => res.json())
        .then((res) => {
            if(res.status === 'success'){
                toast.success('stock updated')
                setData(data.map(item=> item._id === res.product._id ? {...res.product} : item))
            }else{
                toast.error(data.message)
            }
        }).catch((err) => console.log(err))
    };



    return (
        <>

            <SellerNavbar />
            <div className="container mt-5">
                <div className="container text-muted border  rounded shadow mb-3">
                    <h2 className="text-center mb-4">Your listed Products</h2>

                </div>

                <div className="container border  rounded shadow p-3 mb-3 bg-white p-5">
                    <Link to='/seller/add' className="btn btn-primary">Add products </Link>
                   
                
                    <div className="row">
                        {
                            data.map((product, i) => (
                                <div key={i}className="col-lg-2 col-sm-6 col-md-4 d-flex my-3 ">

                                        <div className="card" >
                                            <img src={product.images[0]} className="card-img-top w-auto" alt={product.title} style={{objectFit:'contain', maxHeight:'220px', height:'200px'}}  />

                                            <div className="card-body">
                                                <h6 className="card-title text-muted">{product.title}</h6>

                                                <div className="d-flex">
                                                    <h4 className="me-1 text-dark">₹{product.price} </h4>
                                                    <h5><sub className="text-muted"> onwards</sub></h5>
                                                </div>
                                                <div className="text-muted d-flex">
                                                    {product.stock < 1 ?<p className="btn btn-outline-secondary btn-sm me-2 disabled">-</p>:<p onClick={() => updateStock(product._id, 'decrement')} className="btn btn-outline-secondary btn-sm me-2">-</p>}
                                                    <p className="me-2">stock : {product.stock}</p>
                                                    <p onClick={() => updateStock(product._id, 'increment')} className="btn btn-outline-secondary btn-sm">+</p>
                                                </div>
                                                <div className="">
                                                   
                                                </div>
                                     
                                                


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