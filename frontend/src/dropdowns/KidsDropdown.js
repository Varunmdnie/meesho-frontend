import { Link } from "react-router-dom"
function KidsDropdown() {
    return (
        <>
            <div className="dropdown">

                <Link className="dropdown-button">Kids</Link>
                <div className="dropdown-content">
                    <Link to="/frocks">Frocks</Link>
                    <Link to="/toys">Toys</Link>
                    
               

                </div>
            </div>
        </>
    )
}

export default KidsDropdown