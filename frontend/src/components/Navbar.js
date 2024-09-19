import { Link } from "react-router-dom"
import IconList from "./IconList"
import MenDropDown from "../dropdowns/MenDropdown"
import KidsDropdown from "../dropdowns/KidsDropdown"
import WomenEtDropdown from "../dropdowns/WomenEtDropdown"
import WomenWeDropdown from "../dropdowns/WomenWeDropdown"
import SearchBar from "./SearchBar"



function Navbar() {
    return (
        <>
            <div className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-light pb-0 pt-2" >
                    <div className="container " >
                        <Link className="navbar-brand" to={'/'}><h1 style={{ color: "black" }}><img src="../assets/icon.jpg" alt="" height={"40px"} width={"150px"} /></h1></Link>
                        <button
                            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"

                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>



                        <SearchBar />



                        <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                            <ul className="navbar-nav   mb-lg-0 ">

                                <li className="nav-item">
                                    <Link className="nav-link" to='https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow'><h6>Download App</h6></Link>

                                </li>

                                <span className="vertical-line"></span>
                                <li className="nav-item">
                                    <Link className="nav-link" to='https://supplier.meesho.com/'><h6>Become Supplier</h6></Link>

                                </li>
                                <span className="vertical-line"></span>

                                <li className="nav-item">
                                    <Link className="nav-link" to='https://www.meesho.io/news'><h6>Newsroom</h6></Link>
                                </li>
                                <span className="vertical-line"></span>


                            </ul>

                        </div>
                        <IconList />

                    </div>
                </nav>
                <hr style={{ margin: "0px" }} />


                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="container">
                        <button
                            className="navbar-toggler" type="button"  data-bs-toggle="collapse"  data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"
                            
                            
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <ul className="navbar-nav  lg-3 md-4 sm-6" >

                                    <li className="nav-item me-5">
                                        <Link className="nav-link " aria-current="page" to="#"><WomenEtDropdown /></Link>
                                    </li>
                                    <li className="nav-item me-5">
                                        <Link className="nav-link" to="#"><WomenWeDropdown /></Link>
                                    </li>
                                    <li className="nav-item me-5">
                                        <Link className="nav-link" to="#"><MenDropDown /></Link>
                                    </li>
                                    <li className="nav-item me-5">
                                        <Link className="nav-link" to="#"><KidsDropdown /></Link>
                                    </li>
                                    <li className="nav-item me-5">
                                        <Link className="nav-link" to="/home"><h6>Home & Kitchen</h6></Link>
                                    </li>
                                    <li className="nav-item me-5">
                                        <Link className="nav-link" to="/beauty"><h6>Beauty & Health</h6></Link>
                                    </li>
                                    <li className="nav-item me-5">
                                        <Link className="nav-link" to="/footwear"><h6>Footwear</h6></Link>
                                    </li>
                                    <li className="nav-item me-5">
                                        <Link className="nav-link" to="/electronics"><h6>Electronics</h6></Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <hr style={{ border: "1px solid grey", margin: "0px" }} />
            </div>
        </>
    )
}

export default Navbar