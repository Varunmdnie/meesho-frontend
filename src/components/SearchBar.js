
function SearchBar() {
    return (
        <>
            <div className="container mt-1" style={{width:"35%"}}>

                <div className="dropdown d-flex  " style={{ marginRight:"50px",zIndex:"5" }}>

                    <input type="text" className="form-control  mt-0" id="searchBar" placeholder="Try saree,kurti or Search by Product Code" data-bs-toggle="dropdown" />

                    <div className="dropdown-menu w-100" aria-labelledby="searchBar">
                        <h5 className="text-muted">Popular Searches</h5>
                        
                        <span class="btn btn-outline-secondary rounded-pill m-2">Saree</span>
                        <span class="btn btn-outline-secondary rounded-pill m-2">Pants</span>
                        <span class="btn btn-outline-secondary rounded-pill m-2">Kurtas</span>
                        <span class="btn btn-outline-secondary rounded-pill m-2">Tops</span>
                        
                        <span class="btn btn-outline-secondary rounded-pill m-2">shirts</span>
                        <span class="btn btn-outline-secondary rounded-pill m-2">toys</span>
                        <span class="btn btn-outline-secondary rounded-pill m-2">frocks</span>
                        <span class="btn btn-outline-secondary rounded-pill m-2">jeans</span>

                        
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar