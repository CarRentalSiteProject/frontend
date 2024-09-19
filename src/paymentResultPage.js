/*
import React, { useEffect, useState } from 'react';

const PaymentResultPage = () => {
    const [paymentData, setPaymentData] = useState(null);

    useEffect(() => {
        // 從 sessionStorage 獲取支付數據
        const storedData = sessionStorage.getItem('paymentData');
        if (storedData) {
            setPaymentData(JSON.parse(storedData));
            // 清除 sessionStorage 中的數據
            sessionStorage.removeItem('paymentData');
        }
    }, []);

    if (!paymentData) return <div>加載中...</div>;

    return (
        <div>
            <h2>支付結果</h2>
            {Object.entries(paymentData).map(([key, value]) => (
                <p key={key}><strong>{key}:</strong> {value}</p>
            ))}
        </div>
    );
};

export default PaymentResultPage;
*/
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const PaymentResultPage = () => {
    const [paymentData, setPaymentData] = useState({});
    const location = useLocation();

    useEffect(() => {
        const fetchPaymentResult = async () => {
            const carId = localStorage.getItem('carId');
            const chdate = localStorage.getItem('chdate');
            const redate = localStorage.getItem('redate');
            const odmsg = JSON.stringify({ carId, chdate, redate });
            const searchParams = new URLSearchParams(location.search);
            const data = searchParams.get('data');

            if (data) {
                try {
                    const response = await axios.get(`http://localhost:8080/carrent/paymentResultPage?data=${data}&odmsg=${encodeURIComponent(odmsg)}`);
                    setPaymentData(response.data);
                } catch (error) {
                    console.error('Error fetching payment result:', error);
                }
            }
        };

        fetchPaymentResult();
    }, [location.search]);

    const mctradeNo = paymentData.MerchantTradeNo;//訂單編號
    const tradeAmt = paymentData.TradeAmt;//訂單金額
    const paymentdate = paymentData.PaymentDate;//交易完成時間
    const tradedate = paymentData.TradeDate;//訂單成立時間
    const paytype = paymentData.PaymentType;//交易方式
    const chDate = paymentData.chdate;//借車日
    const reDate = paymentData.redate;//還車日
    const cartype = paymentData.carType;//車型
    const carplace=paymentData.carPlace;//車子地點

    const resultmsg = (paymentData&&paymentData.RtnMsg !==undefined ? paymentData.RtnMsg:'').toString();
    const successmsg = resultmsg==="Succeeded"?"交易成功，請回首頁" :"交易失敗，請返回首頁";//確認交易結果，並回首頁
    return (
        <div>
            <h2>支付結果</h2>
            <p><strong>訂單編號 :</strong> {mctradeNo}</p>
            <p><strong>車子型號 :</strong> {cartype}</p>
            <p><strong>訂車店別 :</strong> {carplace}</p>
            <p><strong>預定租車日 :</strong> {chDate}</p>
            <p><strong>預定還車日 :</strong> {reDate}</p>
            <p><strong>交易方式 :</strong> {paytype}</p>
            <p><strong>交易金額 :</strong> {tradeAmt}</p>
            <p><strong>訂單成立時間 :</strong> {tradedate}</p>
            <p><strong>交易完成時間 :</strong> {paymentdate}</p>
            <br/>
            <p><strong>交易結果 : _ 除錯用 _金流傳輸結果_</strong> {successmsg}</p>
            {Object.entries(paymentData).map(([key, value]) => (
                <p key={key}><strong>{key}:</strong> {value}</p>
            ))}
        </div>
    );
};

export default PaymentResultPage;