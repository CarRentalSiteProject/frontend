import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MembershipInfo() {
    const [memberInfo, setMemberInfo] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const info = localStorage.getItem('memberInfo');
        if (info) {
            setMemberInfo(JSON.parse(info));
        } else {
            navigate('/login'); // 如果沒有會員資訊，重定向到登入頁面
        }
    }, [navigate]);

    return (
        <section className="bg-secondary pb-5 position-relative poster pt-5 text-white-50">
            <div className="container mt-5 pb-5 pt-5">
                <div className="mt-5 pt-5 row">
                    <div className="col-md-10 col-xl-7 pt-5">
                        <p className="fw-bold h4 text-white">Car Rentals</p>
                        <h1><span className="display-3 fw-bold mb-4 text-primary">Member </span><span className="text-white">Information</span></h1>
                        {memberInfo && (
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
                                                value={memberInfo.name}
                                                readOnly
                                            />
                                        </div>
                                        <div className="col-6">
                                            <label className="text-primary">Age: </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="age"
                                                value={memberInfo.age}
                                                readOnly
                                            />
                                        </div>
                                        <div className="col-6">
                                            <label className="text-primary">Gender: </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="gender"
                                                value={memberInfo.gender}
                                                readOnly
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="text-primary">Address: </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="address"
                                                value={memberInfo.address}
                                                readOnly
                                            />
                                        </div>
                                        <div className="col-12 text-end">
                                            <button type="button" className="btn btn-primary">Update Information</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MembershipInfo;
