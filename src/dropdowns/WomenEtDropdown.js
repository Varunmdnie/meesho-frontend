import { Link } from "react-router-dom"

function WomenEtDropdown() {
    return (
        <>
            <div className="dropdown">

                <Link className="dropdown-button">Women Ethnic</Link>
                <div className="dropdown-content">
                    <Link to="/saree" >Sarees</Link>                  
                    <Link to="/kurtas">kurtas</Link>
                </div>
            </div>

        </>
    )

}

export default WomenEtDropdown
