import { useSelector } from "react-redux"
import ProductDetails from "../components/ProductDetails"
import Navbar from "../components/Navbar"

import { useEffect } from "react"
import { useState } from "react"

import { useDispatch } from "react-redux"
import SetCurrentProduct from "../actions/SetCurrentProduct"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"






function Details() {

    let product = useSelector((state) => state.currentProduct.product);
   
    let [productsToShow, setProductsToShow] = useState([]);

    let [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
   

    useEffect(() => {
        fetch('https://meesho-backend-6mf21sb5z-varuns-projects-3f79aa73.vercel.app/api/products/getProducts').then((res) => res.json())
        .then((productsList) => setProducts(productsList.products)).catch((err) => console.log(err))
        
    },[])

    useEffect(() => {
      
        window.scrollTo({top:0})
        setTimeout(() => {
            setLoading(false);
        }, 400); 


        setProductsToShow(products.filter((item)=> item.category === product.category && item._id !== product._id))
    }, [loading, product._id, product.category]);

    
    let dispatch = useDispatch()

    let handleProductClick = (product) => {
        dispatch(SetCurrentProduct(product))
    }




    return (

        <>

            <Navbar />

           
            <ProductDetails product={product} />

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
                                    <img height={"280px"} src={el.images[0]} className="card-img-top" alt={el.title} />

                                    <div className="card-body">
                                        <h6 className="card-title text-muted">{el.title}</h6>

                                        <div className="d-flex">
                                            <h4 className="me-1 text-dark">₹{el.price} </h4>
                                            <h5><sub className="text-muted"> onwards</sub></h5>
                                        </div>
                                        <h6 className="btn btn-light btn-sm text-muted rounded-pill">free delivery</h6>
                                        <br />
                                        <div className="d-flex">
                                            <p className="card-text btn btn-success btn-sm rounded-pill me-2">{el.rating}✩</p>
                                            <p><sub className="text-muted">{el.count} Reviews</sub></p>

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