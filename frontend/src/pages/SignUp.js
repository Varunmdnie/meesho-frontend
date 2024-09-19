import { useState, useEffect } from "react";
import Footer from "../components/Footer"
import ProfileNav from "../components/ProfileNav"
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function SignUp() {
    const [usertype, setUsertype] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState();

    const navigate = useNavigate();

    useEffect(()=>{
        localStorage.clear()
    },[])


    let handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                     'Authorization':localStorage.getItem('userToken'),
                },
                body: JSON.stringify({
                    usertype: usertype,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    phoneNumber: phoneNumber
                }), // Send email and password as JSON to backend
            });

            const data = await response.json();


            // Handle successful or failed login attempt
            if (data.status === 'success') {

                toast.success('Registration Successful!');
                setTimeout(() => {
                    navigate("/login")
                }, 1000);

            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error('Error registering:', error);
        }

    }


    return (
        <>
            < ToastContainer
                autoClose='2000'
                position="top-right"
            />
            <ProfileNav />

            <div className="card mt-5" style={{ width: "25rem", margin: "auto", maxHeight: "600px", border: "2px solid grey" }}>
                <h1 className="text-center">Sign Up</h1>


                <div className="card-body" style={{ textAlign: "center", justifyContent: "center" }}>

                    <form onSubmit={handleSubmit}>

                        <div data-mdb-input-init className="form-outline mb-4" style={{ marginLeft: "-200px" }}>
                            <label className="me-2 text-muted" > User type:  </label>
                            <select id="dropdown" value={usertype} onChange={(e) => setUsertype(e.target.value)}>
                                <option value="" disabled>UserType</option> {/* Default placeholder */}
                                <option value="seller">Seller</option>
                                <option value="customer">Customer</option>

                            </select>

                        </div>


                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="text" placeholder="First Name" id="form2Example2" className="form-control"
                                value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="text" placeholder="Last Name" id="form2Example2" className="form-control"
                                value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="email" placeholder="Email Address" id="form2Example1" className="form-control"
                                value={email} onChange={(e) => setEmail(e.target.value)} />

                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password" placeholder="password" id="form2Example2" className="form-control"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>



                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="number" placeholder="phone number" id="form2Example2" className="form-control"
                                value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>




                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4"
                            onClick={handleSubmit}>Register</button>



                    </form>

                </div>


            </div>

            <Footer />

        </>
    )
}

export default SignUp