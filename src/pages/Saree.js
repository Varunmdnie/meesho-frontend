
import Navbar from "../components/Navbar"
import ProductItem from "../components/ProductItem"
import products from "../data"

// import  filterItem  from "../dropdowns/WomenEtDropdown"

function Saree(){
    let saree = products.filter((el) =>el.subCategory === 'saree')
  

    return(
        <>
        <Navbar/>
        <div className="container row">
        {
            saree.map((item) => <ProductItem product={item}/>)
        }
        </div>
        


        

        </>
    )
}

export default Saree