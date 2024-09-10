import Navbar from "../components/Navbar"
import products from "../data"
import ProductItem from "../components/ProductItem"

function Tops(){
    let tops = products.filter((el) =>el.subCategory === 'tops')
    return(
        <>
        <Navbar/>
        <div className="container row">
        {
            tops.map((item) => <ProductItem product={item}/>)
        }
        </div>
        </>
    )
}
export default Tops