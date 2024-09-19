
import { useEffect, useState } from "react"

import ProductItem from "./ProductItem"
import Sidebar from "./Sidebar"
// import { search$ } from '../state'

function ProductSection() {
    let [productsList, setProductsList] = useState([])
    let [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('http://localhost:4000/api/products/getProducts')
        .then((res) => res.json())
        .then((data) => {
            setProducts(data.products); 
            setProductsList(data.products)
        })
        .catch((err) => console.log(err))

        // search$.subscribe(searchTerm=>{
        //     if (!searchTerm) {
        //         setProductsList([...products]);
        //         return;
        //     }
            
        //     let filteredItems = products.filter((item) => 
        //         item.title.toLowerCase().includes(searchTerm.toLowerCase())
        //     );
        //     setProductsList([...filteredItems]);
        // });
    },[])

    const filterProducts = (action) => {

        switch (action.type) {
            case 'category':
                setProductsList(products.filter((item) => action.data.includes(item.category)))
                break;
            case 'lth':
                setProductsList(products.sort((a, b) => a.price - b.price).filter(a => a))
                break;
            case 'htl':
                setProductsList(products.sort((a, b) => b.price - a.price).filter(a => a))
                break;
            case 'rating':
                setProductsList(products.filter((item) => item.rating >= action.data))
                break;


            default:
                break;
        }

    }
    

    return (
        <>

            <div className="container mt-4" >
                <div className="row m-4 ">


                    <section className="col-md-3 col-sm-12">
                        <h4>Filters</h4>
                        <div id="fil">
                            <Sidebar applyFilter={filterProducts} />
                        </div>
                    </section>


                    <section className="col-md-9">
                            {/* {productsList.length} */}
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