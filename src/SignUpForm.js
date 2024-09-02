import React, { useState } from 'react';
import axios from 'axios';

function SignUpForm() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        licenseNub: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = (event) => {
        event.preventDefault();
    
        // 準備要發送的數據
        const formData = new URLSearchParams({
            name: event.target.name.value,
            age: event.target.age.value,
            gender: event.target.gender.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            password: event.target.password.value,
            confirmPassword: event.target.confirmPassword.value,
            address: event.target.address.value,
            licenseNub: event.target.licenseNub.value
        });
    
        console.log('Form Data:', formData.toString()); // 打印表單數據
    
        axios.post('http://localhost:8080/signup', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => {
            console.log('Response:', response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    };
    

    return (
        <section className="bg-secondary pb-5 position-relative poster pt-5 text-white-50">
            <div className="container mt-5 pb-5 pt-5">
                <div className="mt-5 pt-5 row">
                    <div className="col-md-10 col-xl-7 pt-5">
                        <p className="fw-bold h4 text-white">Car Rentals</p>
                        <h1><span className="display-3 fw-bold mb-4 text-primary">Sign </span><span className="text-white">Up</span></h1>
                        <div className="bg-white p-4">
                            <h2 className="fw-bold h5 mb-3 text-dark">Create an Account</h2>
                            <form onSubmit={validateForm}>
                                <div className="align-items-center gx-2 gy-3 row">
                                    <div className="col-6">
                                        <label className="text-primary">Name: </label>
                                        <input
                                            type="text"
                                            className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Tom"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label className="text-primary">Age: </label>
                                        <input
                                            type="text"
                                            className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                            name="age"
                                            value={formData.age}
                                            onChange={handleChange}
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
                                                checked={formData.gender === 'male'}
                                                onChange={handleRadioChange}
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
                                                checked={formData.gender === 'female'}
                                                onChange={handleRadioChange}
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
                                                checked={formData.gender === 'other'}
                                                onChange={handleRadioChange}
                                            />
                                            <label className="form-check-label" htmlFor="genderOther">Other</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <label className="text-primary">Phone: </label>
                                        <input
                                            type="text"
                                            className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="09XX-XXX-XXX"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="text-primary">Email: </label>
                                        <input
                                            type="email"
                                            className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="tom@test.com"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label className="text-primary">Password: </label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label className="text-primary">Confirm Password: </label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="text-primary">Address: </label>
                                        <input
                                            type="text"
                                            className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            placeholder="Taipei"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label className="text-primary">License Number: </label>
                                        <input
                                            type="text"
                                            className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                            name="licenseNub"
                                            value={formData.licenseNub}
                                            onChange={handleChange}
                                            placeholder="A1XXXXXXXX"
                                        />
                                    </div>
                                    <div className="col-12 text-end">
                                        <button type="submit" className="btn btn-primary pb-2 pe-4 ps-4 pt-2">Create</button>
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

export default SignUpForm;
