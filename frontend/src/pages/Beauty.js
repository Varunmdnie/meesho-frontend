import Navbar from "../components/Navbar"
import { useState,useEffect } from "react"
import ProductItem from "../components/ProductItem"

function Beauty(){
    let [productsList, setProductsList] = useState([])
    useEffect(() =>{
        fetch('http://localhost:4000/api/products/getProducts').then((res) => res.json())
        .then((data) => setProductsList(data.products)).catch((err) => console.log(err))
    },[])
    let beauty = productsList.filter((el) =>el.subCategory === 'beauty')
    return(
        <>
        <Navbar/>
        <div className=" row container">
            {
                beauty.map((item) => <ProductItem product={item}/>)
            }

        </div>
        </>
    )
}

export default Beauty