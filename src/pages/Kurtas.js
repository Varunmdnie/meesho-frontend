import Navbar from "../components/Navbar"
import ProductItem from "../components/ProductItem"
import products from "../data"

function Kurtas(){

    let kurtas = products.filter((el) =>el.subCategory === 'kurtis')
    return(
        <>
        <Navbar/>
        <div className=" row container">
            {
                kurtas.map((item) => <ProductItem product={item}/>)
            }

        </div>
        </>
    )
}

export default Kurtas