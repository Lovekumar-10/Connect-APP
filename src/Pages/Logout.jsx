import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Call backend to end session
    fetch('http://localhost:5000/Logout', {
      method: 'GET',
      credentials: 'include', // Send cookies to handle session
    })
      .then((res) => {
        if (res.ok) {
          // Redirect to homepage after successful logout
          navigate('/');
        } else {
          console.error('Logout failed');
        }
      })
      .catch((err) => {
        console.error('Logout error:', err);
      });
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Logging you out...</h2>
    </div>
  );
};

export default Logout;
