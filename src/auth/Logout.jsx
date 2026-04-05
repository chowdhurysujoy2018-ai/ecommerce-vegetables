import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout
    logout();
    
    // Redirect to home page
    navigate('/');
  }, [logout, navigate]);

  return (
    <div className="h-[50vh] flex items-center justify-center">
      <h2 className="text-xl font-semibold">Logging out...</h2>
    </div>
  );
};

export default Logout;