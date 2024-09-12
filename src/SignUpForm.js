import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

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

        // 檢查是否有未填寫的欄位
        for (const field in formData) {
            if (!formData[field]) {
                let fieldName = field === 'licenseNub' ? 'License Number' : field; // 如果是 licenseNub，就顯示 License Number
                alert(`${fieldName} must not be empty !`);
                return;
            }
        }

        // 檢查密碼和確認密碼是否一致
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match.');
            return; // 停止表單提交
        }

        // 準備要發送的數據
        const dataToSend = new URLSearchParams(formData);
    
        console.log('Form Data:', dataToSend.toString()); // 打印表單數據
    
        axios.post('http://localhost:8080/signup', dataToSend, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => {
            console.log('Response:', response.data);
            alert('Sign up successful ! Please log in !');
            navigate('/login'); // 成功後跳轉到登錄頁面
        })
        .catch(error => {
            if (error.response && error.response.status === 400) {
                alert(error.response.data.error || "Account already exists !");
            } else {
                console.error('There was an error!', error);
            }
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
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label className="text-primary">Age: </label>
                                        <input
                                            type="number"
                                            className="form-control pb-2 pe-3 ps-3 pt-2 rounded-0"
                                            name="age"
                                            value={formData.age}
                                            onChange={handleChange}
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
