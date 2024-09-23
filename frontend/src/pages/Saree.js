
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import ProductItem from "../components/ProductItem"


// import  filterItem  from "../dropdowns/WomenEtDropdown"

function Saree(){

    let [productsList, setProductsList] = useState([])
    useEffect(() =>{
        fetch('https://meesho-backend-6mf21sb5z-varuns-projects-3f79aa73.vercel.app/api/products/getProducts').then((res) => res.json())
        .then((data) => setProductsList(data.products)).catch((err) => console.log(err))
    },[])
    // console.log(productsList);
    
    let saree = productsList.filter((el) =>el.subCategory === 'saree')
    

    return(
        <>
        <Navbar/>
        <div className="container row">
        {
            saree.map((item) => <ProductItem product={item}/>)
        }
        </div>
        

        </>
    )
}

export default Saree