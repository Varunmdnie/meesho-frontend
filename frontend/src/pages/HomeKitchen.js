import Navbar from "../components/Navbar"
import { useState,useEffect } from "react"
import ProductItem from "../components/ProductItem"

function HomeKitchen(){
    let [productsList, setProductsList] = useState([])
    useEffect(() =>{
        fetch('https://meesho-backend-6mf21sb5z-varuns-projects-3f79aa73.vercel.app/api/products/getProducts').then((res) => res.json())
        .then((data) => setProductsList(data.products)).catch((err) => console.log(err))
    },[])
    let home = productsList.filter((el) =>el.category === 'home&kitchen')
    return(
        <>
        <Navbar/>
        <div className=" row container">
            {
                home.map((item) => <ProductItem product={item}/>)
            }

        </div>
        </>
    )
}

export default HomeKitchen