


function Category({categoryFilter}) {

    return (
        <>

            <div className="accordion fixed " id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h5>Category</h5>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <span  class="btn btn-outline-secondary rounded-pill m-2">Men</span>
                            <span class="btn btn-outline-secondary rounded-pill m-2">Women</span>
                            <span class="btn btn-outline-secondary rounded-pill m-2">Kids</span>
                            <span class="btn btn-outline-secondary rounded-pill m-2">Beauty</span>

                            <span class="btn btn-outline-secondary rounded-pill m-2">shirts</span>
                            <span class="btn btn-outline-secondary rounded-pill m-2">toys</span>
                            <span class="btn btn-outline-secondary rounded-pill m-2">frocks</span>
                            <span class="btn btn-outline-secondary rounded-pill m-2">jeans</span>


                        </div>
                    </div>
                </div>
            </div>

           


        </>
    )
}

export default Category




