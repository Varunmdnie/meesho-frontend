import { Link } from "react-router-dom"
function SellerNavbar() {
    return (
        <>
            <nav className="navbar navbar-secondary bg-light">
                <div className="container">
                <Link className="navbar-brand" to={'/'}><h1 style={{ color: "black" }}><img src="../assets/icon.jpg" alt="" height={"40px"} width={"150px"} /></h1></Link>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                   
                </div>
            </nav>
        </>
    )
}

export default SellerNavbar