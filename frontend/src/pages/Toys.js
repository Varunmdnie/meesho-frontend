import Navbar from "../components/Navbar"
import { useState,useEffect } from "react"
import ProductItem from "../components/ProductItem"


function Toys(){
    let [productsList, setProductsList] = useState([])
    useEffect(() =>{
        fetch('https://meesho-backend-6mf21sb5z-varuns-projects-3f79aa73.vercel.app/api/products/getProducts').then((res) => res.json())
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