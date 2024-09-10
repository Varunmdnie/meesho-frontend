import Navbar from "../components/Navbar"
import products from "../data"
import ProductItem from "../components/ProductItem"

function Beauty(){
    let beauty = products.filter((el) =>el.subCategory === 'face')
    return(
        <>
        <Navbar/>
        <div className=" row container">
            {
                beauty.map((item) => <ProductItem product={item}/>)
            }

        </div>
        </>
    )
}

export default Beauty