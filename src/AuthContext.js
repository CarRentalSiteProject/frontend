import React, { createContext, useState, useContext, useEffect } from 'react';
import { validateToken, checkLoginStatus } from './api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
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

    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }
    }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);