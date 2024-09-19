import React, { useState } from 'react';
import { login as apiLogin } from './api';
import { useNavigate, Link } from 'react-router-dom';
//import Footer from './Footer';
import { useAuth } from './AuthContext';


// 定義 Login 組件
const Login = () => {
  // 使用 useState 鉤子來管理用戶名、密碼和錯誤狀態
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  
  // 使用 useNavigate 鉤子來進行頁面導航
  const navigate = useNavigate();
  


  // 處理登錄表單提交的函數
  const handleLogin = async (e) => {
    e.preventDefault();
    try {

      // const response = await axios.post('http://localhost:8080/api/login', {
      //   name: username,
      //   password: password
      // });

      // if (response.data.success) {
      //   // 成功處理
      //   localStorage.setItem('memberInfo', JSON.stringify(response.data)); // 保存會員資訊到 localStorage
      //   navigate('/'); // 使用 useNavigate 來跳轉首頁
      // } else {
      //   setMes(response.data.message);
      //   alert(response.data.message); // 顯示彈出視窗

      const userData = await apiLogin(username, password);
      if (userData) {
        login(userData);
        const lastSearch = JSON.parse(localStorage.getItem('lastSearch'));
        if (lastSearch) {
          navigate(`/search?place=${lastSearch.chplace}&start=${lastSearch.chdate}&end=${lastSearch.redate}`);
          localStorage.removeItem('lastSearch');
        } else {
          navigate('/');
        }
      }
    } catch (error) {
      setError('登入失敗: ' + (error.response?.data || error.message));
    }
  };
  

  // 渲染登錄表單
  return (
    <div className="text-muted">
      <main>
        <section className="bg-secondary pb-5 position-relative poster pt-5 text-white-50">
          <div className="container" />
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="mt-5 pt-5 row">
                <div className="login-form">
                  {error && <div className="alert alert-danger">{error}</div>}
                  <form onSubmit={handleLogin}>
                    <h1 className="display-3 fw-bold mb-4 text-white">
                      <span className="text-primary">Log in</span>
                    </h1>

                    <div className="form-group">
                      <input type="text" className="form-control" name="id" placeholder="Username"
                        required="required"
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" name="paswd" placeholder="Password"
                        required="required"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="card-group">
                      <button type="submit" name="login" value="login" className="btn btn-primary btn-block">Log in</button>
                    </div>
                    <div className="form-group text-center">
                      New friend?<Link to="/signup">Sign up</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Login;