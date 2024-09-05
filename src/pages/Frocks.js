import Navbar from "../components/Navbar"
import products from "../data"
import ProductItem from "../components/ProductItem"

function Frocks(){
    let frocks = products.filter((el) =>el.subCategory === 'frock')
   
        
    return(
        <>
        <Navbar/>
        <div className="container row">
        {
            frocks.map((item) => <ProductItem product={item}/>)
        }
        </div>
        </>
    )
}
export default Frocks