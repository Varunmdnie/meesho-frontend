
import { useState } from "react"
import products from "../data"
import ProductItem from "./ProductItem"
import Sidebar from "./Sidebar"
function ProductSection(){
    let [productsList, setProductsList] = useState(products)

   const filterProducts = (action)=>{
    switch (action.type) {
        case 'category':
            setProductsList(products.filter((item) => action.data.includes(item.category)))
            break;
    
        default:
            break;
    }
    
   }
    
    return(
        <>
         
         <div className="container-fluid mt-4">
                <div className="row m-4 ">
                    
                    <section className="col-md-3 col-sm-12  position-sticky"> 
                        <h4>Filters</h4>
                        <Sidebar applyFilter={filterProducts}/>    
                    </section>

                    <section className="col-md-9  ">
                        <div className="row">
                        {
                            productsList.map((product, index) => (
                                <ProductItem key={index} product={product} />
                            ))
                        }
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}

export default ProductSection