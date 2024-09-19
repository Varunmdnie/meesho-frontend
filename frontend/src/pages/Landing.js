import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProductSection from "../components/ProductSection"
import { search$ } from '../state'
import { useEffect, useState } from "react"

function Landing() {
    let [searchString, setSearchString] = useState('')

    useEffect(()=>{
        search$.subscribe(searchTerm=>{
            setSearchString(searchTerm)
        });
        
    },[])

    return (
        <>
            <Navbar />
            {searchString ? null : 
                <> <div className="  container mt-5" style={{ width: "75rem" }}>

                    <img src="../assets/banner1.jpg" className="card-img-top" alt="..." />

                </div>

                    <div className=" container mt-5" style={{ width: "75rem" }}>
                        <img src="../assets/banner2.jpg" className="card-img-top" alt="..." />
                    </div></>
                }

           

            <div className="container mt-4 text-muted ">
                <h2 style={{marginLeft:"3%"}}>Products For You</h2>
            </div>
            <ProductSection />
            <Footer />



        </>
    )
}

export default Landing