import { useSelector } from "react-redux"
import ProductDetails from "../components/ProductDetails"
import Navbar from "../components/Navbar"
import { Skeleton } from "@mui/material"

import { useEffect } from "react"
import { useState } from "react"
import products from "../data"

import { useDispatch } from "react-redux"
import SetCurrentProduct from "../actions/SetCurrentProduct"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"






function Details() {

    let product = useSelector((state) => state.currentProduct.product);
   
    let [productsToShow, setProductsToShow] = useState([]);


    const [loading, setLoading] = useState(true);

    useEffect(() => {
      
        window.scrollTo({top:0})
        setTimeout(() => {
            setLoading(false);
        }, 400); 

        setProductsToShow(products.filter((item)=> item.category === product.category && item.id !== product.id))
    }, [loading, product.id, product.category]);

    
    let dispatch = useDispatch()

    let handleProductClick = (product) => {
        dispatch(SetCurrentProduct(product))
    }




    return (

        <>

            <Navbar />

            {loading ? (
                <Skeleton sx={{ margin: '100px', mt: '500px', mr: '15px' }} variant="text" width={500} height={500} />
            ) : (
                <ProductDetails product={product} />
            )}

            <div className="container mt-5 text-muted ">
                <h2 style={{ marginLeft: "3%" }}>People also viewed</h2>
            </div>



            <div className=" container mt-5">
                <div className="row">
                    {
                        productsToShow.map((el, i) => (
                            <div className="col-lg-2 col-sm-6 col-md-4 d-flex my-3" key={i}>
                                 <Link className="text-decoration-none" to={{ pathname: `/details/${el.id}` }} onClick={()=>handleProductClick(el)}>
                            

                                <div className="card" style={{ width: "13rem" }} >
                                    <img height={"280px"} src={el.image} className="card-img-top" alt={el.title} />

                                    <div className="card-body">
                                        <h6 className="card-title text-muted">{el.title}</h6>

                                        <div className="d-flex">
                                            <h4 className="me-1 text-dark">₹{el.price} </h4>
                                            <h5><sub className="text-muted"> onwards</sub></h5>
                                        </div>
                                        <h6 className="btn btn-light btn-sm text-muted rounded-pill">free delivery</h6>
                                        <br />
                                        <div className="d-flex">
                                            <p className="card-text btn btn-success btn-sm rounded-pill me-2">{el.rating.rate}✩</p>
                                            <p><sub className="text-muted">{product.rating.count} Reviews</sub></p>

                                        </div>

                                    </div>
                                </div>
                                </Link>
                            </div>
                        ))
                    }

                </div>
            </div>

            <Footer/>

        </>
    )
}

export default Details