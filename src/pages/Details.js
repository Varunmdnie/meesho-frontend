import { useSelector } from "react-redux"
import ProductDetails from "../components/ProductDetails"
import Navbar from "../components/Navbar"
import { Skeleton } from "@mui/material"

import { useEffect } from "react"
import { useState } from "react"



function Details() {

    let product = useSelector((state) => state.currentProduct.product)

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500); // Simulate a 2 second load time
    }, [loading]);

    return (

        <>
        
        <Navbar/>
           
            {loading ? (
                
                <Skeleton sx={{ margin: '100px', mt: '500px', mr: '15px' }} variant="text" width={500} height={500} />
                
               
                
            ) : (
                
                <ProductDetails product={product} />
                
            )}


            
        </>
    )
}

export default Details