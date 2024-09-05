import { Link } from "react-router-dom"
function SearchBar() {
    return (
        <>
            <div className="container mt-1" style={{width:"35%"}}>

                <div className="dropdown d-flex  " style={{ marginRight:"50px",zIndex:"5" }}>

                    <input type="text" className="form-control  mt-0" id="searchBar" placeholder="Try saree,kurti or Search by Product Code" data-bs-toggle="dropdown" />

                    <div className="dropdown-menu w-100" aria-labelledby="searchBar">
                        <h5 className="text-muted">Popular Searches</h5>
                        
                        <Link to='/saree' class="btn btn-outline-secondary rounded-pill m-2">Saree</Link>
                        <Link to='/pants' class="btn btn-outline-secondary rounded-pill m-2">Pants</Link>
                        <Link to='/kurtas' class="btn btn-outline-secondary rounded-pill m-2">Kurtas</Link>
                        <Link to='/tops' class="btn btn-outline-secondary rounded-pill m-2">Tops</Link>
                        
                        <Link to='/shirts' class="btn btn-outline-secondary rounded-pill m-2">shirts</Link>
                        <Link to='/toys' class="btn btn-outline-secondary rounded-pill m-2">toys</Link>
                        <Link to='/frocks' class="btn btn-outline-secondary rounded-pill m-2">frocks</Link>
                   

                        
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar