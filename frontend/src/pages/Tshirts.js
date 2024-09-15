import Navbar from "../components/Navbar"
import { useState,useEffect } from "react"
import ProductItem from "../components/ProductItem"




function Tshirts(){
    let [productsList, setProductsList] = useState([])
    useEffect(() =>{
        fetch('http://localhost:4000/api/products/getProducts').then((res) => res.json())
        .then((data) => setProductsList(data.products)).catch((err) => console.log(err))
    },[])

    let tshirts = productsList.filter((el) =>el.subCategory === 'T-shirt')
   
        
        return(
            <>
            <Navbar/>
            <div className="container row">
            {
                tshirts.map((item) => <ProductItem product={item}/>)
            }
            </div>
            </>
        )
}
export default Tshirts