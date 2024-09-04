
function Color() {
    return (
        <>
             <div className="accordion fixed " id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <h5>Color</h5>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                <h5 className="text-muted">Red</h5>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" for="flexCheckChecked">
                                <h5 className="text-muted">blue</h5>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" for="flexCheckChecked">
                                <h5 className="text-muted">green</h5>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" for="flexCheckChecked">
                                <h5 className="text-muted">yellow</h5>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            



        </>
    )
}

export default Color