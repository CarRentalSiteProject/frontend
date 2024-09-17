import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateInfoForm() {
    const [memberData, setMemberData] = useState({});
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        // Check token and fetch member data
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user ? user.token : null;

        if (!token) {
            navigate('/login');
            return;
        }

        axios
            .get('http://localhost:8080/api/membership', { headers: { Authorization: `Bearer ${token}` } })
            .then((response) => {
                setMemberData(response.data);
                setFormData(response.data); // Populate form with current data
                setError(null);
            })
            .catch((error) => {
                console.error('Error fetching membership data', error);
                setError('Failed to fetch member data. Please try again later.');
                navigate('/login');
            });
    }, [navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user ? user.token : null;

        // 避免 name 或其他字段被 null 覆蓋
        if (!formData.name) {
            formData.name = memberData.name;
        }

        // 確保把 name 對應到後端的 username
        const updatedFormData = {
            ...formData,
            username: formData.name, // 映射到後端的 username 字段
        };

        axios
        .put('http://localhost:8080/api/updateinfo', updatedFormData, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => {
            // 從後端回應中取得 logoutRequired 標誌
            const { logoutRequired } = response.data;

            // 若後端要求登出，則清空 localStorage 並跳轉至 login 頁面
            if (logoutRequired) {
                alert("Update successful, please log in again.");
                localStorage.removeItem('user');
                // 清除 cookie
                document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                window.location.reload(); // 重新載入頁面
                navigate('/login');  // 跳轉到登入頁面
            } else {
                alert("Update successful!");
                navigate('/membership');  // 若無需登出則跳轉至會員頁面
            }
        })
        .catch((error) => {
            console.error('Error updating membership data', error);
            setError('Failed to update member data. Please try again later.');
        });

    };


    return (
        <section className="bg-secondary pb-5 position-relative poster pt-5 text-white-50">
            <div className="container mt-5 pb-5 pt-5">
                <div className="mt-5 pt-5 row">
                    <div className="col-md-10 col-xl-7 pt-5">
                        <p className="fw-bold h4 text-white">Car Rentals</p>
                        <h1><span className="display-3 fw-bold mb-4 text-primary">Update </span><span className="text-white">Information</span></h1>
                        <div className="bg-white p-4">
                            <h2 className="fw-bold h5 mb-3 text-dark">Update Information</h2>
                            <form>
                                <div className="align-items-center gx-2 gy-3 row">
                                    <div className="col-6">
                                        <label className="text-primary">Name: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={formData.name || ''}
                                            onChange={handleInputChange}
                                            placeholder={memberData.name || ''}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label className="text-primary">Age: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="age"
                                            value={formData.age || ''}
                                            onChange={handleInputChange}
                                            placeholder={memberData.age || ''}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label className="text-primary">Gender: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="gender"
                                            value={formData.gender || ''}
                                            onChange={handleInputChange}
                                            placeholder={memberData.gender || ''}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="text-primary">Address: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="address"
                                            value={formData.address || ''}
                                            onChange={handleInputChange}
                                            placeholder={memberData.address || ''}
                                        />
                                    </div>
                                    <div className="col-12 text-end">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={handleUpdate}
                                        >
                                            Save
                                        </button>
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