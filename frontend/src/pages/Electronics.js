import Navbar from "../components/Navbar"
import { useState,useEffect } from "react"
import ProductItem from "../components/ProductItem"

function Electronics(){
    let [productsList, setProductsList] = useState([])
    useEffect(() =>{
        fetch('http://localhost:4000/api/products/getProducts').then((res) => res.json())
        .then((data) => setProductsList(data.products)).catch((err) => console.log(err))
    },[])
    let elctronics = productsList.filter((el) =>el.category === 'electronics')
    return(
        <>
        <Navbar/>
        <div className=" row container">
            {
                elctronics.map((item) => <ProductItem product={item}/>)
            }

        </div>
        </>
    )
}

export default Electronics