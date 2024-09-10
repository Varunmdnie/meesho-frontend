import Navbar from "../components/Navbar"
import products from "../data"
import ProductItem from "../components/ProductItem"

function Electronics(){
    let elctronics = products.filter((el) =>el.category === 'Electronics')
    return(
        <>
        <Navbar/>
        <div className=" row container">
            {
                elctronics.map((item) => <ProductItem product={item}/>)
            }

        </div>
        </>
    )
}

export default Electronics