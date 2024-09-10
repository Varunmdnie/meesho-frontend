
import Navbar from "../components/Navbar"

import ProductSection from "../components/ProductSection"
import products from "../data"

function Mens(){
    const menProducts = products.filter((el) => el.category === 'men')
   
    return(
        <>
        <Navbar/>
        <div className="row"></div>
        {
            menProducts.map((item) => <ProductSection product={item}/>)
        }

       
        
        
        </>
    )
}

export default Mens