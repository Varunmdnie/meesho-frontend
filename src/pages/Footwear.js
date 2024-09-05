import Navbar from "../components/Navbar"
import products from "../data"
import ProductItem from "../components/ProductItem"

function Footwear(){
    let footwear = products.filter((el) =>el.subCategory === 'footwear')
    return(
        <>
        <Navbar/>
        <div className=" row container">
            {
                footwear.map((item) => <ProductItem product={item}/>)
            }

        </div>
        </>
    )
}

export default Footwear