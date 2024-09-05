import Navbar from "../components/Navbar"
import products from "../data"
import ProductItem from "../components/ProductItem"

function Dresses(){
    let dresses = products.filter((el) =>el.subCategory === 'dresses')
    return(
        <>
        <Navbar/>
        <div className="container row">
        {
            dresses.map((item) => <ProductItem product={item}/>)
        }
        </div>
        </>
    )
}

export default Dresses