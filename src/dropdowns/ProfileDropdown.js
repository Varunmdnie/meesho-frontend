import { Link } from "react-router-dom"
import { CgProfile } from "react-icons/cg";

function ProfileDropdown() {
    return (
        <>

            <div className="dropdown">
                {/* <button className="dropdown-button"><CgProfile /></button> */}
                <div className="text-center">
                    <Link className="dropdown-button">
                        <h4><CgProfile /></h4>
                        <p>profile</p>


                    </Link>
                </div>

                <div className="dropdown-content">
                    <Link to="/profile">Sign up</Link>
                    <Link to="#">My Orders</Link>
                    <Link to="#">Delete Account</Link>
                </div>
            </div>


        </>
    )
}

export default ProfileDropdown