import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ForOrderDetail = () => {
  const location = useLocation();
  const [orderDetail, setOrderDetail] = useState({});
  const [mbName,setmbName]=useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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


  date.setDate(date.getDate() + (orderDetail.Days-1));


  const reDate = date.toISOString().split('T')[0];

  return (
    <div>
      <h1>訂單詳細資訊</h1>
      <table border="1">
        <thead>
          <tr>
            <th>欄位</th>
            <th>數值</th>
          </tr>
        </thead>
        <tbody>
          <tr >
              <td>會員名稱 : </td>
              <td>{mbName}</td>
            </tr>
            <tr >
              <td>訂單編號 : </td>
              <td>{orderDetail.Detail_ID}</td>
            </tr>
              <td>交易金額 :</td>
              <td>{orderDetail.Price}</td>
            <tr>
              <td>租借車輛 :</td>
              <td>{orderDetail.CarType}</td>
            </tr>            
            <tr>
              <td>租借地點 :</td>
              <td>{orderDetail.Location}</td>
            </tr>
            <tr>
              <td>租車日期 :</td>
              <td>{orderDetail.Date}</td>
            </tr>
            <tr>
              <td>還車日期 :</td>
              <td>{reDate}</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ForOrderDetail;