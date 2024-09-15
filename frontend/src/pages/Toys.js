import Navbar from "../components/Navbar"
import { useState,useEffect } from "react"
import ProductItem from "../components/ProductItem"


function Toys(){
    let [productsList, setProductsList] = useState([])
    useEffect(() =>{
        fetch('http://localhost:4000/api/products/getProducts').then((res) => res.json())
        .then((data) => setProductsList(data.products)).catch((err) => console.log(err))
    },[])
    let toys = productsList.filter((el) =>el.subCategory === 'toys')
   
        
    return(
        <>
        <Navbar/>
        <div className="container row">
        {
            toys.map((item) => <ProductItem product={item}/>)
        }
        </div>
        </>
    )
}
export default Toys