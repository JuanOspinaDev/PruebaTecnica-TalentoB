import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { authenticate } from '../services/authService'; 

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);  
  const navigate = useNavigate(); 

  const login = async (username, password) => {
    try {
      const data = await authenticate(username, password);
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem('token', data.token);
      navigate('/scriptboard');
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    navigate('/'); 
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
