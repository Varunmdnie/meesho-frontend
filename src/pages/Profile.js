
import { Link } from "react-router-dom"
import ProfileNav from "../components/ProfileNav"
import Footer from "../components/Footer"


function Profile() {
    return (
        <>
          <ProfileNav/>
            <div className="card mt-5" style={{ width: "25rem", margin: "auto", maxHeight: "600px",border:"2px solid grey" }}>
                <img src="https://media.istockphoto.com/id/955641488/photo/clothes-shop-costume-dress-fashion-store-style-concept.jpg?b=1&s=612x612&w=0&k=20&c=vY7Z40ulwxsFmetje1ck91C-GSPFpFUZqOxkIpuMug8=" className="card-img-top" alt="..." />

                <div className="card-body" style={{ textAlign: "center", justifyContent: "center" }}>
                    <form>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="email" placeholder="Email Address" id="form2Example1" className="form-control" />
                            
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password" placeholder="password" id="form2Example2" className="form-control" />
                        </div>


                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form2Example31"  />
                                    <label className="form-check-label" for="form2Example31"> Remember me </label>
                                </div>
                            </div>

                            <div className="col">

                                <Link href="">Forgot password?</Link>
                            </div>
                        </div>


                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>


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