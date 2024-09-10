import Navbar from "../components/Navbar"
import products from "../data"
import ProductItem from "../components/ProductItem"

function Shirts(){
    let shirts = products.filter((el) =>el.subCategory === 'shirt')
   
        
    return(
        <>
        <Navbar/>
        <div className="container row">
        {
            shirts.map((item) => <ProductItem product={item}/>)
        }
        </div>
        </>
    )
}
export default Shirts