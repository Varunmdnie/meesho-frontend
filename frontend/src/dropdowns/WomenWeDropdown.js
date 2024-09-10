import { Link } from "react-router-dom"

function WomenWeDropdown() {
    return (
        <>
            <div className="dropdown">

                <Link className="dropdown-button">Women Western</Link>
                <div className="dropdown-content">
                    <Link to="/tops">Tops</Link>
                
                    <Link to="/dresses">Dresses</Link>
                </div>
            </div>

        </>
    )

}

export default WomenWeDropdown