import { Link,useNavigate } from "react-router-dom"
function SellerNavbar() {

    let navigate = useNavigate()

    let handleLogout = () =>{
        localStorage.clear()
        setTimeout(() =>{
           
                navigate('/')

            
        },1000)
        

    }
    return (
        <>
            <nav className="navbar navbar-secondary bg-light">
                <div className="container">
                <Link className="navbar-brand" to= '#'><h1 style={{ color: "black" }}><img src="../assets/icon.jpg" alt="" height={"40px"} width={"150px"} /></h1></Link>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <div>
                    <Link className="btn btn-success me-2" to={'/seller'}>View Products</Link>
                    <button onClick={handleLogout} className="btn btn-outline-secondary">logout</button>
                    </div>
                   
                </div>
            </nav>
        </>
    )
}

export default SellerNavbar