import Navbar from "../components/Navbar"
import products from "../data"
import ProductItem from "../components/ProductItem"

function Pants(){
    let pants = products.filter((el) =>el.subCategory === 'pant')
   
        
    return(
        <>
        <Navbar/>
        <div className="container row">
        {
            pants.map((item) => <ProductItem product={item}/>)
        }
        </div>
        </>
    )
}
export default Pants