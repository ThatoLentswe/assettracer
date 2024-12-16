import { useState, useEffect } from 'react';
import { login, logout } from '../services/authService';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const loginUser = async (username, password) => {
    const data = await login(username, password);
    setUser(data.user);
    localStorage.setItem('userToken', data.token);
  };

  const logoutUser = () => {
    setUser(null);
    logout();
  };

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      setUser({ token }); // Simplified token handling
    }
  }, []);

  return { user, loginUser, logoutUser };
};

export default useAuth;
