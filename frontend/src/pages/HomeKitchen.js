import Navbar from "../components/Navbar"
import products from "../data"
import ProductItem from "../components/ProductItem"

function HomeKitchen(){
    let home = products.filter((el) =>el.category === 'Home&Kitchen')
    return(
        <>
        <Navbar/>
        <div className=" row container">
            {
                home.map((item) => <ProductItem product={item}/>)
            }

        </div>
        </>
    )
}

export default HomeKitchen