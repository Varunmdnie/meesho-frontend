import { Link } from "react-router-dom"
import IconList from "./IconList"
import SearchBar from "./SearchBar"

function ProfileNav(){
    return(
        <>
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



                        <div className="collapse navbar-collapse" style={{ marginLeft: "px" }} id="navbarSupportedContent">
                            <ul className="navbar-nav   mb-lg-0 ">

                                <li className="nav-item">
                                    <Link className="nav-link" to='https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow'><h6>Download App</h6></Link>

                                </li>

                                <span class="vertical-line"></span>
                                <li className="nav-item">
                                    <Link className="nav-link" to='https://supplier.meesho.com/'><h6>Become a Supplier</h6></Link>

                                </li>
                                <span class="vertical-line"></span>

                                <li className="nav-item">
                                    <Link className="nav-link" to='https://www.meesho.io/news'><h6>Newsroom</h6></Link>
                                </li>
                                <span class="vertical-line"></span>


                            </ul>

                        </div>
                        <IconList />

                    </div>
                </nav>

        </>
    )
}

export default ProfileNav