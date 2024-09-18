import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const ForOrderDetail = () => {
  const location = useLocation();
  const [orderDetail, setOrderDetail] = useState({});
  const [mbName, setmbName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleback = (event) => {
    event.preventDefault(); // 阻止表單的默認提交行為
    navigate('/'); // 導航回首頁
    window.scrollTo(0, 0);//回網頁頂部
  };

  useEffect(() => {
    const fetchOrderDetail = async () => {
      setLoading(true);
      try {
        const detailData = location.state?.detailData;
        if (!detailData || !detailData.orderDetail) {
          throw new Error('No order detail data available');
        }
        setOrderDetail(detailData.orderDetail);
        setmbName(detailData.mbName);
        setLoading(false);
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to load order details. ' + err.message);
        setLoading(false);
      }
    };

    fetchOrderDetail();
  }, [location.state]);

  if (loading) return <div>載入中...</div>;
  if (error) return <div>錯誤: {error}</div>;
  const date = new Date(orderDetail.Date);


  date.setDate(date.getDate() + (orderDetail.Days - 1));


  const reDate = date.toISOString().split('T')[0];

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
                    <span className="text-primary">Payment Result</span>
                  </h1>
                  <h1>Order Detail</h1>
                  <table className="table table-bordered " style={{ borderCollapse: 'collapse', backgroundColor: 'white' }}>

                    <tbody>
                      <tr >
                        <td style={{ padding: '10px' }}>Member Name : </td>
                        <td style={{ padding: '10px' }}>{mbName}</td>
                      </tr>
                      <tr >
                        <td style={{ padding: '10px' }}>Order Number : </td>
                        <td style={{ padding: '10px' }}>{orderDetail.Detail_ID}</td>
                      </tr>
                      <td style={{ padding: '10px' }}>Transaction Amount (NT$) :</td>
                      <td style={{ padding: '10px' }}>{orderDetail.Price}</td>
                      <tr>
                        <td style={{ padding: '10px' }}>Car Model :</td>
                        <td style={{ padding: '10px' }}>{orderDetail.CarType}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px' }}>Booking Shop :</td>
                        <td style={{ padding: '10px' }}>{orderDetail.Location}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px' }}>Order Establishment Time :</td>
                        <td style={{ padding: '10px' }}>{orderDetail.Date}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px' }}>Transaction Completion Time</td>
                        <td style={{ padding: '10px' }}>{reDate}</td>
                      </tr>
                    </tbody>
                  </table>
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
};

export default ForOrderDetail;