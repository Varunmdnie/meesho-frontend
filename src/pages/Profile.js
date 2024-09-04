import Navbar from "../components/Navbar"

function Profile() {
    return (
        <>
            <Navbar />
            <div class="card" style={{ width: "25rem", margin: "auto", maxHeight: "600px" }}>
                <img src="https://media.istockphoto.com/id/955641488/photo/clothes-shop-costume-dress-fashion-store-style-concept.jpg?b=1&s=612x612&w=0&k=20&c=vY7Z40ulwxsFmetje1ck91C-GSPFpFUZqOxkIpuMug8=" class="card-img-top" alt="..." />

                <div class="card-body" style={{ textAlign: "center",justifyContent:"center" }}>
                    <h5>Sign Up to View your Profile</h5><br />
                    <h4><span>phone number</span></h4>
                    <input type="text" placeholder="Enter your mobile number" accept="number" /><br /><br />
                    <button class="btn btn-secondary" type="button">Continue</button>
                </div>


            </div>
        </>
    )
}

export default Profile