

function Rating(){
    return(
        <> 
        <div className="accordion fixed " id="accordionExample" >
          
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                            <h5>Rating</h5>
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                <h5 className="text-muted">Above 3</h5>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" for="flexCheckChecked">
                                <h5 className="text-muted">Above 3.5</h5>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" for="flexCheckChecked">
                                <h5 className="text-muted">Above 4</h5>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" for="flexCheckChecked">
                                <h5 className="text-muted">Above 4.5</h5>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
           
        </>
    )
}

export default Rating