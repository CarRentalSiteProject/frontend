import React, { createContext, useState, useContext } from 'react';
import { validateToken, checkLoginStatus } from './api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('user');
  };

  const checkAuth = async () => {
    try {
        const response = await checkLoginStatus();
        if (response === 200) {
          // 如果用戶已登入，可以從後端獲取用戶信息
          const userData = await validateToken();
          setIsAuthenticated(true);
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('驗證失敗:', error);
        setIsAuthenticated(false);
        return false;
      }
    };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);