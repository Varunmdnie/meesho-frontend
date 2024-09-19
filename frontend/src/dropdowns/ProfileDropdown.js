import { Link, useNavigate } from "react-router-dom"
import { CgProfile } from "react-icons/cg";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateCartCount } from "../actions/CartActions";

function ProfileDropdown() {

    let navigate = useNavigate()
    const dispatch = useDispatch();

    let handleLogout = () => {
        localStorage.clear()
        navigate('/')
        dispatch(updateCartCount(0))
        toast.success('user logged off');

   
        
    }
    return (
        <>
            < ToastContainer 
                autoClose='2000'
                position="top-right"
            />

            <div className="dropdown">
                {/* <button className="dropdown-button"><CgProfile /></button> */}
                <div className="text-center">
                    <Link className="dropdown-button">
                        <h4><CgProfile /></h4>
                        <p>profile</p>


                    </Link>
                </div>

                <div className="dropdown-content">
                    {localStorage.getItem('loggedInUser') ? <Link className="text-primary fs-5" >Hello {JSON.parse(localStorage.getItem('loggedInUser')).firstName}</Link> :null}
                    {localStorage.getItem('loggedInUser') ? null :<Link to="/login">Login</Link>}
                    {localStorage.getItem('loggedInUser') ? null :<Link to="/signup">Sign Up</Link>}
                    {localStorage.getItem('loggedInUser') ?  <Link to="/orders">My Orders</Link> :null}
                    <Link to="/login">sell products</Link>
                    {localStorage.getItem('loggedInUser')? <Link to='/' onClick={handleLogout}>Logout</Link>:null }
                    
                </div>
            </div>


        </>
    )
}

export default ProfileDropdown