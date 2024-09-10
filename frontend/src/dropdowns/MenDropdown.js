
import { Link } from "react-router-dom"
function MenDropDown(){
    return(
        <>
            <div className="dropdown">
          

                <Link to='/men' className="dropdown-button">Men</Link>
                <div className="dropdown-content">
                    <Link to="/tshirts">T-shirt</Link>
                    <Link to="/pants">Pants</Link>
                    <Link to="/shirts">shirt</Link>
                    <Link to="/vests">vests</Link>
                    
                    

                </div>
            </div>

        </>
    )
}

export default MenDropDown