import { Link } from "react-router-dom"
import { BsCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { AddToCart } from "../actions/CartActions";
import { useEffect, useState } from "react";
import {  toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';





function ProductDetails({ product }) {

    let [selectedSize, setSelectedSize] = useState('')
    let [selectedImage, setSelectedImage] = useState(''); 


    let dispatch = useDispatch()

    let handleCartClick = () => {
        if (!selectedSize) {
            toast.error('Please select a size before adding to the cart.');
            return;
        }

        dispatch(AddToCart({ ...product, selectedSize }));
        toast.success('Product added to cart')
    }

    let handleSizeSelection = (size) => {
        setSelectedSize(size)
    }

    let handleImageClick = (image) => {
        setSelectedImage(image);  // Update the larger image
    };

    useEffect(()=>{
       setSelectedImage(product?.images[0])
        
    },[product?.images[0]])




    return (
        <>
            {/* <ToastContainer
                position="top-right"
                autoClose='2000'
            /> */}
            <section className="bg-light ">
                <div className="container">
                    <div className="row ">

                        <div className="col-lg-1 col-md-2 col-sm-2 mt-4">

                            <div className="card mb-3"  onClick={() => handleImageClick(product?.images[0])}>
                                <img className="card-img img-fluid" src={product?.images[0]} alt="" id="product-detail" />
                            </div>

                            <div className="card mb-3"  onClick={() => handleImageClick(product?.images[1])}>
                                <img className="card-img img-fluid" src={product?.images[1]} alt="" id="product-detail" />
                            </div>
                            

                        </div>


                        <div className="col-lg-5 col-md-9 col-sm-12 mt-4">

                            <div className="card mb-3" >
                                <img className="card-img img-fluid" src={selectedImage} alt="" id="product-detail" />
                            </div>
                            <div className=" d-flex justify-content-between   " style={{ width: "92%" }}>
                                <Link className="text-decoration-none text-secondary btn btn-outline-info btn-lg m-1 w-50" onClick={handleCartClick} to="#">< BsCartPlusFill /> Add to Cart</Link>
                                <Link className="text-decoration-none text-light btn btn-primary btn-lg w-50 m-1" onClick={handleCartClick} to="/cart">Buy Now</Link>
                            </div>

                        </div>



                        <div className="col-lg-6 col-md-9 col-sm-12 mt-4 ">
                            <div className="card" >
                                <div class="card-body">
                                    <h5 className="card-title text-muted">{product.title}</h5>
                                    <h4>₹{product.price}</h4>

                                    <div className="d-flex">
                                        <p className="card-text btn btn-secondary btn-sm rounded-pill me-2">{product.rating}✩</p>
                                        <p><sub className="text-muted">{product.rating} Reviews</sub></p>
                                    </div>
                                    <h6 className="btn btn-light btn-sm text-muted rounded-pill">free delivery</h6>
                                </div>
                            </div>

                            <div className="card mt-4" >
                                <div class="card-body">
                                    <h3 className="card-title">Select Size</h3>

                                    {product.sizes.map((el, i) => (
                                        <span key={i} class="btn btn-outline-secondary rounded m-2" onClick={() => handleSizeSelection(el)}>{el}</span>

                                    ))}


                                </div>
                            </div>

                            <div className="card mt-4" >
                                <div class="card-body">
                                    <h3 className="card-title">Product Details</h3>
                                    <p className="card-text text-muted">{product.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default ProductDetails