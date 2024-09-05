import Navbar from "../components/Navbar"
import products from "../data"
import ProductItem from "../components/ProductItem"


function Toys(){
    let toys = products.filter((el) =>el.subCategory === 'toys')
   
        
    return(
        <>
        <Navbar/>
        <div className="container row">
        {
            toys.map((item) => <ProductItem product={item}/>)
        }
        </div>
        </>
    )
}
export default Toys