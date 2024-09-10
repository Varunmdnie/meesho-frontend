import { Link } from "react-router-dom"
import { BsCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { AddToCart } from "../actions/CartActions";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function ProductDetails({ product }) {

    let [selectedSize, setSelectedSize] = useState('')
    let [selectedImage, setSelectedImage] = useState(product?.image); 


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




    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose='2000'
            />
            <section className="bg-light ">
                <div className="container">
                    <div className="row ">

                        <div className="col-lg-1 mt-4">

                            <div className="card mb-3" style={{ width: "5rem" }} onClick={() => handleImageClick(product?.image)}>
                                <img className="card-img img-fluid" src={product?.image} alt="" id="product-detail" />
                            </div>

                            <div className="card mb-3" style={{ width: "5rem" }} onClick={() => handleImageClick(product?.imageSmall)}>
                                <img className="card-img img-fluid" src={product?.imageSmall} alt="" id="product-detail" />
                            </div>
                           

                        </div>


                        <div className="col-lg-5 mt-4">

                            <div className="card mb-3" style={{ width: "30rem" }}>
                                <img className="card-img img-fluid" src={selectedImage} alt="" id="product-detail" />
                            </div>
                            <div className=" d-flex justify-content-between   " style={{ width: "92%" }}>
                                <Link className="text-decoration-none text-secondary btn btn-outline-info btn-lg m-1 w-50" onClick={handleCartClick} to="#">< BsCartPlusFill /> Add to Cart</Link>
                                <Link className="text-decoration-none text-light btn btn-primary btn-lg w-50 m-1" onClick={handleCartClick} to="/cart">Buy Now</Link>
                            </div>

                        </div>



                        <div className="col-lg-6 mt-4 ">
                            <div className="card" style={{ width: "40rem" }}>
                                <div class="card-body">
                                    <h5 className="card-title text-muted">{product.title}</h5>
                                    <h4>₹{product.price}</h4>

                                    <div className="d-flex">
                                        <p className="card-text btn btn-secondary btn-sm rounded-pill me-2">{product.rating.rate}✩</p>
                                        <p><sub className="text-muted">{product.rating.count} Reviews</sub></p>
                                    </div>
                                    <h6 className="btn btn-light btn-sm text-muted rounded-pill">free delivery</h6>
                                </div>
                            </div>

                            <div className="card mt-4" style={{ width: "40rem" }}>
                                <div class="card-body">
                                    <h3 className="card-title">Select Size</h3>

                                    {product.size.map((el, i) => (
                                        <span key={i} class="btn btn-outline-secondary rounded m-2" onClick={() => handleSizeSelection(el)}>{el}</span>

                                    ))}


                                </div>
                            </div>

                            <div className="card mt-4" style={{ width: "40rem" }}>
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