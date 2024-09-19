import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

function RentOrder() {
    const location = useLocation();
    const { carDetail, chdate, redate } = location.state || {};
    const cDetails = carDetail.selectedCar;
    const navigate = useNavigate();
    const userlocal = localStorage.getItem('user');  
    const userObj = JSON.parse(userlocal); 
    const uname = userObj.username;
    const jwtToken = Cookies.get('jwt');

    const handleCancel = (event) => {
        event.preventDefault(); // 阻止表單的默認提交行為
        navigate('/'); // 導航回首頁
        window.scrollTo(0, 0);//回網頁頂部
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        try {            
            // 支付請求
            const response = await axios.post('http://localhost:8080/carrent/payment', {
                carId: cDetails.CarID,
                chdate: chdate,
                redate: redate,
                token:jwtToken
                //jwttk: jwtToken
            }, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                },
                withCredentials: true
            });
            const formHtml = response.data;

            //後端回覆HTML後提交
            const paymentDiv = document.createElement('div');
            paymentDiv.innerHTML = formHtml;
            document.body.appendChild(paymentDiv);
            paymentDiv.querySelector('form').submit();

        } catch (error) {
            console.error('Error during payment:', error);
        }
    };
    const rentaldate = new Date(chdate);
    const returndate = new Date(redate);
    const daysBetween = Math.floor((returndate - rentaldate) / (1000 * 60 * 60 * 24)+1);
    const totalptice = cDetails.Price*daysBetween;

    //<p>Debug: selectedCar = {JSON.stringify(carDetail)}</p>

    
    return (
        <div className="text-muted">

            <main>
                <section className="bg-secondary pb-5 position-relative poster pt-5 text-white-50">
                    <div className="container" />
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="mt-5 pt-5 row " >
                                <div
                                    className="p-3 text-dark rounded-3"
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', fontWeight: 'bold' }}
                                > <h2 className="display-3 fw-bold mb-5 text-white">
                                        <span className="text-primary">Order Confirm</span>
                                    </h2>
                                    <div className="container mt-3">
                                        <div className="d-flex justify-content-between">
                                        <h5><p style={{ padding: '10px' }}className="bg-white">Rental Date : {chdate}</p></h5>
                                        <h5><p style={{ padding: '10px' }}className="bg-white">Return Date : {redate}</p></h5>
                                        </div>
                                    </div>
                                    <p>vehicle of your choice :</p>
                                    <div className="table-responsive">
                                        <table className="table table-bordered bg-white rounded-3">
                                            <thead className="thead-light ">
                                            <tr>
                                                    <th style={{ padding: '10px' }} scope="col">Subscriber</th><td style={{ padding: '10px' }}>{uname}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{ padding: '10px' }} scope="col">Car Model</th><td style={{ padding: '10px' }}>{cDetails.carType}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{ padding: '10px' }} scope="col">Booking Shop</th><td style={{ padding: '10px' }}>{cDetails.c_location}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{ padding: '10px' }} scope="col">Price/day(NT$)</th><td style={{ padding: '10px' }}>{cDetails.Price}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{ padding: '10px' }} scope="col">Capacity(passenger number)</th><td style={{ padding: '10px' }}>{cDetails.PeopleNub}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{ padding: '10px' }} scope="col">Total Price(NT$)</th><td style={{ padding: '10px' }}>{totalptice}</td>
                                                </tr>                                                
                                            </thead>                                            
                                        </table>
                                    </div>
                                    <div className="container mt-3">
                                        <div className="d-flex justify-content-between">
                                            <form onSubmit={handlePayment}>
                                                <button type="submit" className="btn btn-primary">Confirm Order</button>
                                            </form>

                                            <form onSubmit={handleCancel}>
                                                <button type="submit" className="btn btn-secondary">Order Cancel</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>                
            </main>
        </div>
    );
}

export default RentOrder;