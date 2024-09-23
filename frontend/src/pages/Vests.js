import Navbar from "../components/Navbar"
import { useState,useEffect } from "react"
import ProductItem from "../components/ProductItem"



function Vests(){
    let [productsList, setProductsList] = useState([])
    useEffect(() =>{
        fetch('https://meesho-backend-6mf21sb5z-varuns-projects-3f79aa73.vercel.app/api/products/getProducts').then((res) => res.json())
        .then((data) => setProductsList(data.products)).catch((err) => console.log(err))
    },[])
    let vests = productsList.filter((el) =>el.subCategory === 'vests')
   
        
    return(
        <>
        <Navbar/>
        <div className="container row">
        {
            vests.map((item) => <ProductItem product={item}/>)
        }
        </div>
        </>
    )
}
export default Vests