import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function MembershipInfo() {
    const [memberData, setMemberData] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user ? user.token : null;

        if (!token) {
            alert("Please log in!");
            navigate('/login');
            return;
        }

        let isMounted = true; // Flag to check if component is mounted

        axios.get('http://localhost:8080/api/membership', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => {
                if (isMounted) {
                    setMemberData(response.data);
                    setError(null);
                }
            })
            .catch((error) => {
                console.error('Error fetching membership data:', error);
                if (error.response?.status === 403) {
                    if (isMounted) {
                        alert('Session expired. Please log in again.');
                        navigate('/login');
                    }
                } else {
                    if (isMounted) {
                        setError('Failed to fetch member data.');
                    }
                }
            });

        return () => {
            isMounted = false; // Cleanup function to set flag to false on unmount
        };
    }, [navigate]);



    if (error) {
        return <div>{error}</div>; // 顯示錯誤信息
    }

    if (!memberData) {
        return <div>Loading...</div>; // 資料尚未加載時顯示的內容
    }

    return (
        <section className="bg-secondary pb-5 position-relative poster pt-5 text-white-50">
            <div className="container mt-5 pb-5 pt-5">
                <div className="mt-5 pt-5 row">
                    <div className="col-md-10 col-xl-7 pt-5">
                        <p className="fw-bold h4 text-white">Car Rentals</p>
                        <h1><span className="display-3 fw-bold mb-4 text-primary">Member </span><span className="text-white">Information</span></h1>
                        <div className="bg-white p-4">
                            <h2 className="fw-bold h5 mb-3 text-dark">Information</h2>
                            <form>
                                <div className="align-items-center gx-2 gy-3 row">
                                    <div className="col-6">
                                        <label className="text-primary">Name: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={memberData.name || ''}
                                            readOnly
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label className="text-primary">Age: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="age"
                                            value={memberData.age || ''}
                                            readOnly
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label className="text-primary">Gender: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="gender"
                                            value={memberData.gender || ''}
                                            readOnly
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="text-primary">Address: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="address"
                                            value={memberData.address || ''}
                                            readOnly
                                        />
                                    </div>
                                    <div className="col-12 text-end">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => navigate('/updateinfo')} // 假設你有一個更新信息的頁面
                                        >
                                            Update Information
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

export default MembershipInfo;
