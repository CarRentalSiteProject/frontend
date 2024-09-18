import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
function ForOrder() {
  const location = useLocation();
  const navigate = useNavigate();
  const { mbID } = location.state || {};
  const orders = mbID.mbodDataStr;
  const mbname = mbID.mbName;
  const jwtToken = Cookies.get('jwt');

  const handleback = (event) => {
    event.preventDefault(); // 阻止表單的默認提交行為
    navigate('/'); // 導航回首頁
    window.scrollTo(0, 0);//回網頁頂部
  };

  const handleDetailClick = async (searchdetailID) => {
    try {
      const response = await axios.post('http://localhost:8080/carrent/forOrderDetail', {
        od_ID: searchdetailID
      }, {
        headers: {
            Authorization: `Bearer ${jwtToken}`
        },
        withCredentials: true
    });
      console.log('API Response:', response.data);
      navigate('/forOrderDetail', { state: { detailData: response.data } });
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };


  return (
    <div className="text-muted">

      <main>
        <section className="bg-secondary pb-5 position-relative poster pt-5 text-white-50">
          <div className="container" />
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="mt-5 pt-5 row">
                <div
                  className="p-3 text-dark rounded-3"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', fontWeight: 'bold' }}
                > <h1 className="display-3 fw-bold mb-5 text-white">
                    <span className="text-primary">Order Details for _{mbname}_</span>
                    </h1>
                  {orders == null || orders.length === 0 ? (
                    // Display this message when orders is null
                    <div style={{ backgroundColor: 'white', padding: '20px', textAlign: 'center' }}>
                      <h2>None of Order</h2>
                    </div>
                  ) : (
                    // Otherwise, display the table
                    <table className="table table-bordered text-center" style={{ borderCollapse: 'collapse', backgroundColor: 'white' }}>
                      <thead>
                        <tr>
                          <th style={{ padding: '10px' }}>Order Number</th>
                          <th style={{ padding: '10px' }}>Order Status</th>
                          <th style={{ padding: '10px' }}></th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => (
                          <tr key={order.OrderID}>
                            <td>{order.Detail_ID}</td>
                            <td>{order.Od_Status}</td>
                            <td>
                              <button onClick={() => handleDetailClick(order.OrderID)}>
                                More Detail Information
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                  <div className="container mt-3">
                    <div className="d-flex justify-content-between">
                      <form onSubmit={handleback}>
                        <button type="submit" className="btn btn-primary">HomePage</button>
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

export default ForOrder;