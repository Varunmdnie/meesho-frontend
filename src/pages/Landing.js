import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProductSection from "../components/ProductSection"

function Landing(){
    return(
        <>
        <Navbar/>
       
        <div class=" container mt-5" style={{width:"75rem"}}>
        <img src="../assets/banner1.jpg" class="card-img-top" alt="..."/>
        </div>
        
        <div class=" container mt-5" style={{width:"75rem"}}>
        <img src="../assets/banner2.jpg" class="card-img-top" alt="..."/>
        </div>

        <div className="container-fluid m-4 text-muted ">
            <h2>Products For You</h2>
        </div>
        <ProductSection/>
        <Footer/>
        
        
         
        </>
    )
}

export default Landing