import Navbar from "../components/Navbar"
import products from "../data"
import ProductItem from "../components/ProductItem"




function Tshirts(){

    let tshirts = products.filter((el) =>el.subCategory === 'T-shirts')
   
        
        return(
            <>
            <Navbar/>
            <div className="container row">
            {
                tshirts.map((item) => <ProductItem product={item}/>)
            }
            </div>
            </>
        )
}
export default Tshirts