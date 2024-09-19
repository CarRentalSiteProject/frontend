/*
import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const PaymentResult = () => {
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        // 從 URL 獲取所有參數
        const searchParams = new URLSearchParams(location.search);
        const paymentData = {};
        for (let [key, value] of searchParams) {
            paymentData[key] = value;
        }

        // 將支付數據存儲到 sessionStorage
        sessionStorage.setItem('paymentData', JSON.stringify(paymentData));

        // 重定向到結果頁面
        history.push('/carrent/paymentResultPage');
    }, [location.search, history]);

    return <div>處理中，請稍候...</div>;
};

export default PaymentResult;*/
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const PaymentResult = () => {
    const location = useLocation();
    const navigate = useNavigate();
    

    useEffect(() => {
        // 從 URL 獲取所有參數
        const searchParams = new URLSearchParams(location.search);
        const data = searchParams.get('data');
        
        if (data) {
            // 重定向到結果頁面
            navigate(`/carrent/paymentResultPage?data=${data}`);
        } else {
            console.error('No payment data found in URL');
            // 可以選擇重定向到錯誤頁面或首頁
            // navigate('/error');
        }
    }, [location.search, navigate]);

    return <div>處理中，請稍候...</div>;
};

export default PaymentResult;