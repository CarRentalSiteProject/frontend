import axios from 'axios';

// 定義 API 的基礎 URL
const API_URL = 'http://localhost:8080/api';

// 創建一個 axios 實例，設置基礎 URL 和默認請求頭
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 登錄函數
export const login = async (username, password) => {
  const response = await api.post('login', { username, password });
  return response.data;
};

// 登出函數
export const logout = async () => {
  try {
    await api.post('logout');
    // 更新前端狀態，例如重定向到登錄頁面
  } catch (error) {
    console.error('登出失敗', error);
  }
};


// 驗證 token 有效性
export const validateToken = async () => {
  try {
    const response = await api.get('/validate-token');
    return response.data.isValid;
  } catch (error) {
    console.error('Token validation failed:', error);
    return false;
  }
};

export const checkLoginStatus = async () => {
  try {
    const response = await api.get('/checkLoginStatus');
    return response.data;
  } catch (error) {
    console.error('檢查登入狀態失敗:', error);
    throw error;
  }
};

// 導出 api 實例
export default api;