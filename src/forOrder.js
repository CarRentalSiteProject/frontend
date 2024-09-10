import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
function ForOrder(){
    const location = useLocation();
    const navigate = useNavigate();
    const{mbID}=location.state|| {};
    const orders = mbID.mbodData;
    const mbname = mbID.mbName;
   

    const handleDetailClick = async (searchdetailID) => {
        try {
            const response = await axios.post('http://localhost:8080/carrent/forOrderDetail', {
                od_ID: searchdetailID
            });
            console.log('API Response:', response.data);
            navigate('/forOrderDetail', { state: { detailData: response.data } });
        } catch (error) {
            console.error('Error submitting order:', error);
        }
    };


  return (
    <div>
        <div>
          <h1>Order Details for _{mbname}_</h1>
          <table border="1">
            <thead>
              <tr>
                <th>Detail_ID</th>
                <th>Od_Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.OrderID
                }>
                  <td>{order.Detail_ID}</td>
                  <td>{order.Od_Status}</td>
                  <td>
                    <button 
                         onClick={() => handleDetailClick(order.OrderID)}
                          >
                          確認此訂單
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default ForOrder;