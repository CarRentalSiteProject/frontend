import React from 'react';
import { Link } from 'react-router-dom';

function  MembershipInfo(){
    return (
        <section className="bg-secondary pb-5 position-relative poster pt-5 text-white-50">
            <div className="container mt-5 pb-5 pt-5">
                <div className="mt-5 pt-5 row">
                    <div className="col-md-10 col-xl-7 pt-5">
                        <p className="fw-bold h4 text-white">Car Rentals</p>
                        <h1><span className="display-3 fw-bold mb-4 text-primary">Member </span><span className="text-white">Information</span></h1>
                        <div className="bg-white p-4">
                            <h2 className="fw-bold h5 mb-3 text-dark">Information</h2>
                            
                            <form >
                                <div className="align-items-center gx-2 gy-3 row">
                                    <div className="col-6">
                                        <label className="text-primary">Name: </label>
                                        <input
                                            type="text"
                                            className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                            name="name"
                                            
                                            placeholder="Tom"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label className="text-primary">Age: </label>
                                        <input
                                            type="text"
                                            className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                            name="age"
                                            placeholder="18"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label className="text-primary">Gender: </label>
                                        <input
                                            type="text"
                                            className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                            name="age"
                                            placeholder="18"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="text-primary">Address: </label>
                                        <input
                                            type="text"
                                            className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                            name="address"
                                            placeholder="Taipei"
                                        />
                                    </div>
                                    <Link to="/updateinfo">
                                    <div className="col-12 text-end">
                                        <button type="submit" className="btn btn-primary pb-2 pe-4 ps-4 pt-2">Update Information</button>
                                    </div>
                                    </Link>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}
export default MembershipInfo;