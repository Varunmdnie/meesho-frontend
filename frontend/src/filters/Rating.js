

function Rating({rateFilter}){
    return(
        <> 
           
           <div className="accordion fixed " id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            <h5>Rating</h5>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <span onClick={() => rateFilter({data:3,type:'rating'})}  class="btn btn-outline-secondary rounded-pill m-2">above 3</span>
                        <span onClick={() => rateFilter({data:4,type:'rating'})} class="btn btn-outline-secondary rounded-pill m-2">above 4</span>
                        <span onClick={() => rateFilter({data:4.5,type:'rating'})} class="btn btn-outline-secondary rounded-pill m-2">above 4.5</span>
       
                            


                        </div>
                    </div>
                </div>
            </div>
     
           
        </>
    )
}

export default Rating