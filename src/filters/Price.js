

function Price({priceFilter}) {
    return (
        <>
        
        <div className="accordion fixed " id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <h5>Price</h5>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <span onClick={() => priceFilter({data:["price"],type:'lth'})}  class="btn btn-outline-secondary rounded-pill m-2">low to high</span><br/>
                        <span onClick={() => priceFilter({data:["price"],type:'htl'})}   class="btn btn-outline-secondary rounded-pill m-2">high to low</span>
       
                            


                        </div>
                    </div>
                </div>
            </div>

            

        </>
    )
}
export default Price