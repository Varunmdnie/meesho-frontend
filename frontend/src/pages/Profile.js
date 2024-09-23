
import { Link, useNavigate } from "react-router-dom"
import ProfileNav from "../components/ProfileNav"
import Footer from "../components/Footer"
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateCartCount } from "../actions/CartActions";


function Profile() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        localStorage.clear()
    },[])

     let handleSubmit = async (e) =>{
        e.preventDefault(); 
        try {
            const response = await fetch('https://meesho-backend-6mf21sb5z-varuns-projects-3f79aa73.vercel.app/api/users/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization':localStorage.getItem('userToken'),
              },
              body: JSON.stringify({
                email: email,
                password: password
              }), // Send email and password as JSON to backend
            });
      
            const data = await response.json();
           
            if (data.status === 'success') {
                localStorage.setItem('loggedInUser', JSON.stringify(data.user))
                localStorage.setItem('userToken', data.token)
                toast.success('Login Successful!');
                if(data.UserCart){
                    dispatch(updateCartCount(data.userCart?.items?.length))
                }
                setTimeout(() => {
                    switch(data.user.usertype) {
                        case 'customer':
                            navigate('/');
                            break;
                     
                        case 'seller':
                            navigate('/seller');
                            break;
                        default:
                            break;
                    }
                }, 1000);
            } else {
              toast.error(data.message); 
            }
          } catch (error) {
            console.error('Error logging in:', error);
            toast.error('Error logging in. Please try again.');
          }

     }


    return (
        <>
        < ToastContainer
        autoClose='2000'
        position="top-right"
        />
          <ProfileNav/>
            <div className="card mt-5" style={{ width: "25rem", margin: "auto", maxHeight: "600px",border:"2px solid grey" }}>
                <img src="https://media.istockphoto.com/id/955641488/photo/clothes-shop-costume-dress-fashion-store-style-concept.jpg?b=1&s=612x612&w=0&k=20&c=vY7Z40ulwxsFmetje1ck91C-GSPFpFUZqOxkIpuMug8=" className="card-img-top" alt="..." />

                <div className="card-body" style={{ textAlign: "center", justifyContent: "center" }}>
                    <form onSubmit={handleSubmit}>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="email" placeholder="Email Address" id="form2Example1" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} required />
                            
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password" placeholder="password" id="form2Example2" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} required />
                        </div>


                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form2Example31"  />
                                    <label className="form-check-label" for="form2Example31"> Remember me </label>
                                </div>
                            </div>

                            <div className="col">
                                <Link to='/forgetPassword'>Forgot password?</Link>
                            </div>
                        </div>


                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4" >Sign in</button>


                        <div className="text-center">
                            <p>Not a member? <Link to="/signup">Register</Link></p>
                   
                        </div>
                    </form>
                    

                </div>


            </div>
            <Footer/>
        </>
    )
}

export default Profile