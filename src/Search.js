import React from 'react';

function Search() {
    return (
        <div>
            <section className="bg-secondary pb-5 position-relative poster pt-5 text-white-50">
                <div className="container mt-5 pb-5 pt-5">
                    <div className="mt-5 pt-5 row">
                        <div className="col-md-10 col-xl-7 pt-5">
                            <p className="fw-bold h4 text-white">Car Rentals</p>
                            <h1 className="display-3 fw-bold mb-4 text-white">For Your <span className="text-primary">Everyday Commute</span> or <span className="text-primary">Leisure</span></h1>
                            <div className="bg-white p-4">
                                <h2 className="fw-bold h5 mb-3 text-dark">Let&apos;s find your ideal car</h2>
                                <form role="form"> 
                                    <div className="align-items-center gx-2 gy-3 row">
                                        <div className="col-sm"> 
                                            <input type="text" className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0" placeholder="Enter your pickup location..."/> 
                                        </div>
                                        <div className="col-sm-4"> 
                                            <input type="date" className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"/> 
                                        </div>
                                        <div className="col-sm-auto text-end"> 
                                            <button type="submit" className="btn btn-primary pb-2 pe-4 ps-4 pt-2">Search</button>                                             
                                        </div>
                                    </div>                                     
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Search;