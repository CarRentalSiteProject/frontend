import React from 'react';

function  UpdateInfoForm(){
    return (
        <section className="bg-secondary pb-5 position-relative poster pt-5 text-white-50">
            <div className="container mt-5 pb-5 pt-5">
                <div className="mt-5 pt-5 row">
                    <div className="col-md-10 col-xl-7 pt-5">
                        <p className="fw-bold h4 text-white">Car Rentals</p>
                        <h1><span className="display-3 fw-bold mb-4 text-primary">Member </span><span className="text-white">Information</span></h1>
                        <div className="bg-white p-4">
                            <h2 className="fw-bold h5 mb-3 text-dark">Update Information</h2>
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
                                        <div className="text-primary">
                                            <input
                                                id="genderMale"
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                className="form-check-input"
                                            />
                                            <label className="form-check-label" htmlFor="genderMale">Male</label>
                                        </div>
                                        <div className="text-primary">
                                            <input
                                                id="genderFemale"
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                className="form-check-input"
                                            />
                                            <label className="form-check-label" htmlFor="genderFemale">Female</label>
                                        </div>
                                        <div className="text-primary">
                                            <input
                                                id="genderOther"
                                                type="radio"
                                                name="gender"
                                                value="other"
                                                className="form-check-input"
                                            />
                                            <label className="form-check-label" htmlFor="genderOther">Other</label>
                                        </div>
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
                                    <div className="col-12 text-end">
                                        <button type="submit" className="btn btn-primary pb-2 pe-4 ps-4 pt-2">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}
export default UpdateInfoForm;