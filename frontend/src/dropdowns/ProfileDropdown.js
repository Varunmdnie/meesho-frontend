import { Link } from "react-router-dom"
import { CgProfile } from "react-icons/cg";
import { toast, ToastContainer } from "react-toastify";

function ProfileDropdown() {

    let handleLogout = () => {
        localStorage.removeItem('loggedInUser')
   
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
                    <Link to="/profile">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/orders">My Orders</Link>
                    <Link to="/profile">sell products</Link>
                    <Link to='/' onClick={handleLogout}>Logout</Link>
                </div>
            </div>


        </>
    )
}

export default ProfileDropdown