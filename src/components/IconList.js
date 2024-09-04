import { BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProfileDropdown from "../dropdowns/ProfileDropdown";





const IconList = () => {
    // const cartCounter = useSelector(state => state.cart.cartCounter); 
    return (
        <>
        <div className="d-flex pr-2">
            
                <div style={{marginRight:"40px", color:"black"}}>
                    
                    <ProfileDropdown/>
                 
                </div>
           
            <Link to='/cart' className="dropdown-button text-dark">
                <div>
                    <h4 style={{color:"grey"}}>< BsCartPlusFill /></h4>
                    <p>Cart</p>
                   
                    
                </div>
            </Link>
            </div>

        </>
    );
}

export default IconList;