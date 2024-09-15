import Navbar from "../components/Navbar"
import ProductItem from "../components/ProductItem"
import { useState,useEffect } from "react"

function Kurtas(){

    let [productsList, setProductsList] = useState([])
    useEffect(() =>{
        fetch('http://localhost:4000/api/products/getProducts').then((res) => res.json())
        .then((data) => setProductsList(data.products)).catch((err) => console.log(err))
    },[])

    let kurtas = productsList.filter((el) =>el.subCategory === 'kurtis')
    return(
        <>
        <Navbar/>
        <div className=" row container">
            {
                kurtas.map((item) => <ProductItem product={item}/>)
            }

        </div>
        </>
    )
}

export default Kurtas