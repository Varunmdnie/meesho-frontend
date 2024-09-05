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
           
            <Link to='#' className="dropdown-button text-dark">
                

                    <div className="d-flex">
                    <h4 style={{color:"grey"}}>< BsCartPlusFill /></h4>
                    <p className=""></p>
                    </div>

                   
                  
                    <p>Cart </p>
                    
                   
                    
               
            </Link>
            </div>

        </>
    );
}

export default IconList;