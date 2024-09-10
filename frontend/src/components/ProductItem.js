import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import SetCurrentProduct from "../actions/SetCurrentProduct"

function ProductItem({ product }) {
    let dispatch = useDispatch()


    let handleProductClick = () => {
        dispatch(SetCurrentProduct(product))
    }



    return (
        <>
            <div className="col-lg-3 col-sm-6 col-md-4 d-flex my-3 ">
                <Link className="text-decoration-none" to={{ pathname: `/details/${product.id}` }} onClick={handleProductClick}>
                    <div className="card" style={{ width: "14rem" }} >
                        <img height={"280px"} src={product.image} className="card-img-top" alt={product.title} />

                        <div className="card-body">
                            <h6 className="card-title text-muted">{product.title}</h6>

                            <div className="d-flex">
                                <h4 className="me-1 text-dark">₹{product.price} </h4>
                                <h5><sub className="text-muted"> onwards</sub></h5>
                            </div>
                            <h6 className="btn btn-light btn-sm text-muted rounded-pill">free delivery</h6>
                            <br />
                            <div className="d-flex">
                                <p className="card-text btn btn-success btn-sm rounded-pill me-2">{product.rating.rate}✩</p>
                                <p><sub className="text-muted">{product.rating.count} Reviews</sub></p>

                            </div>

                        </div>
                    </div>
                </Link>
            </div>


        </>
    )
}
export default ProductItem