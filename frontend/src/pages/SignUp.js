import Footer from "../components/Footer"
import ProfileNav from "../components/ProfileNav"


function SignUp(){
    return(
        <>
           <ProfileNav/>
           
            <div className="card mt-5" style={{ width: "25rem", margin: "auto", maxHeight: "600px",border:"2px solid grey" }}>
            <h1 className="text-center">Sign Up</h1>
            

                <div className="card-body" style={{ textAlign: "center", justifyContent: "center" }}>
                  
                    <form>
                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password" placeholder="First Name" id="form2Example2" className="form-control" />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password" placeholder="Last Name" id="form2Example2" className="form-control" />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="email" placeholder="Email Address" id="form2Example1" className="form-control" />
                            
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password" placeholder="password" id="form2Example2" className="form-control" />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password" placeholder=" Re-enter password" id="form2Example2" className="form-control" />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password" placeholder="phone number" id="form2Example2" className="form-control" />
                        </div>




                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Register</button>


                        
                    </form>

                </div>


            </div>

            <Footer/>

        </>
    )
}

export default SignUp