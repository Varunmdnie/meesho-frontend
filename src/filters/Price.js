

function Price() {
    return (
        <>

            <div className="accordion fixed " id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            <h5>Price</h5>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    <h5 className="text-muted">Below 200</h5>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" for="flexCheckChecked">
                                    <h5 className="text-muted">Below 300</h5>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" for="flexCheckChecked">
                                    <h5 className="text-muted">Below 400</h5>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" for="flexCheckChecked">
                                    <h5 className="text-muted">Below 500</h5>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Price