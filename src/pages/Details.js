import { useSelector } from "react-redux"
import ProductDetails from "../components/ProductDetails"
import Navbar from "../components/Navbar"

function Details(){

    let product = useSelector((state) => state.currentProduct.product)
    return(
        
        <>
        <Navbar/>
        <ProductDetails product ={product}/>
        </>
    )
}

export default Details