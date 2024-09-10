


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
                            <span onClick={() => categoryFilter({data:["men"],type:'category'})}  class="btn btn-outline-secondary rounded-pill m-2">Men</span>
                            <span onClick={() => categoryFilter({data:["women"],type:'category'})}  class="btn btn-outline-secondary rounded-pill m-2">Women</span>
                            <span onClick={() => categoryFilter({data:["kids"],type:'category'})} class="btn btn-outline-secondary rounded-pill m-2">Kids</span>
                            <span onClick={() => categoryFilter({data:["Beauty"],type:'category'})} class="btn btn-outline-secondary rounded-pill m-2">Beauty</span>

                            <span onClick={() => categoryFilter({data:["Home&Kitchen"],type:'category'})} class="btn btn-outline-secondary rounded-pill m-2">Home</span>
                            <span onClick={() => categoryFilter({data:["Electronics"],type:'category'})}  class="btn btn-outline-secondary rounded-pill m-2">Electronics</span>
                            


                        </div>
                    </div>
                </div>
            </div>

           


        </>
    )
}

export default Category




