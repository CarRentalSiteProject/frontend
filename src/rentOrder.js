import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function RentOrder() {
    const location = useLocation();
    const { carDetail, chdate, redate } = location.state || {};
    const cDetails = carDetail.selectedCar;

    const handlePayment = async (e) => {
        e.preventDefault();
        try {
            localStorage.setItem('carId', cDetails.CarID);//存入，待用
            localStorage.setItem('chdate', chdate);
            localStorage.setItem('redate', redate);
            // 支付請求
            const response = await axios.post('http://localhost:8080/carrent/payment', {
                carId: cDetails.CarID,
                chdate: chdate,
                redate: redate,
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

    
    return (
        <div>
            <p>取車日期 : {chdate}</p>
            <p>還車日期 : {redate}</p>
            <p>Debug: selectedCar = {JSON.stringify(carDetail)}</p>
            <p>您選擇的車輛:</p>
            <table border="1">
                <thead>
                    <tr>
                        <th>車型</th>
                        <th>地點</th>
                        <th>價格</th>
                        <th>可容納人數</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{cDetails.CarType}</td>
                        <td>{cDetails.C_Location}</td>
                        <td>{cDetails.Price}</td>
                        <td>{cDetails.PeopleNub}</td>
                    </tr>
                </tbody>
            </table>
            <form onSubmit={handlePayment}>
                <button type="submit">Confirm Order</button>            
            </form>
        </div>
    );
}

export default RentOrder;