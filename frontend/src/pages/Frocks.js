import Navbar from "../components/Navbar"
import { useState,useEffect } from "react"
import ProductItem from "../components/ProductItem"

function Frocks(){
    let [productsList, setProductsList] = useState([])
    useEffect(() =>{
        fetch('http://localhost:4000/api/products/getProducts').then((res) => res.json())
        .then((data) => setProductsList(data.products)).catch((err) => console.log(err))
    },[])
    let frocks = productsList.filter((el) =>el.subCategory === 'frocks')
   
        
    return(
        <>
        <Navbar/>
        <div className="container row">
        {
            frocks.map((item) => <ProductItem product={item}/>)
        }
        </div>
        </>
    )
}
export default Frocks