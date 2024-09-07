import { Link } from "react-router-dom"
import { BsCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { AddToCart } from "../actions/CartActions";





function ProductDetails({ product }) {

    let dispatch = useDispatch()

    let handleCartClick = () =>{
        dispatch(AddToCart(product))
    }




    return (
        <>
            <section className="bg-light ">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-5 mt-4">

                            <div className="card mb-3" style={{ width: "30rem" }}>
                                <img className="card-img img-fluid" src={product?.image} alt="" id="product-detail" />
                            </div>
                            <div className=" d-flex justify-content-between   " style={{ width: "92%" }}>
                              <Link className="text-decoration-none text-secondary btn btn-outline-info btn-lg m-1 w-50" onClick={handleCartClick} to="#">< BsCartPlusFill /> Add to Cart</Link>
                            <Link className="text-decoration-none text-light btn btn-primary btn-lg w-50 m-1" onClick={handleCartClick} to="/cart">Buy Now</Link>
                            </div>

                        </div>



                        <div className="col-lg-7 mt-4 ">
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

                            {/* <div className="card mt-4" style={{ width: "40rem" }}>
                                <div class="card-body">
                                    <h3 className="card-title">Select Size</h3>

                                    {product.size.map((el, i) => (
                                         <Link key={i} class="btn btn-outline-secondary rounded m-2">{el}</Link>
                                     
                                    ))}
 




                                   
                                </div>
                            </div> */}

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