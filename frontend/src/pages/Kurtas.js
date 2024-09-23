import Navbar from "../components/Navbar"
import ProductItem from "../components/ProductItem"
import { useState,useEffect } from "react"

function Kurtas(){

    let [productsList, setProductsList] = useState([])
    useEffect(() =>{
        fetch('https://meesho-backend-6mf21sb5z-varuns-projects-3f79aa73.vercel.app/api/products/getProducts').then((res) => res.json())
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