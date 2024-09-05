import Navbar from "../components/Navbar"
import products from "../data"
import ProductItem from "../components/ProductItem"



function Vests(){
    let vests = products.filter((el) =>el.subCategory === 'vests')
   
        
    return(
        <>
        <Navbar/>
        <div className="container row">
        {
            vests.map((item) => <ProductItem product={item}/>)
        }
        </div>
        </>
    )
}
export default Vests