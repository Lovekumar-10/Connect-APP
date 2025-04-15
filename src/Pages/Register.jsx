import React, { useState } from 'react';
import '../Styles/Login.css';
import Login from './Login';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleGoogleLogin = () => {
  // your logic here – this is just a placeholder
  console.log('Google login clicked from Register page');
};


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      console.log('Form submitted', formData);
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="login-wrapper">
      {/* Left Image Section */}
      <div className="login-left">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1744518645~exp=1744522245~hmac=d48c63f2ac6256ed30ae1c910871b662d622d6bf84b2a04f13ab6177f5cac102&w=826"
          alt="Illustration"
          className="login-image"
        />
      </div>

      {/* Right Form Section */}
      <div className="login-right">
        <p className="register-link">
          Already have an account?  <Link to="/login">Login</Link> 
        </p>
        <h2>Create an Account</h2>
        <p className="welcome-text">Please fill out the form to create a new account.</p>

        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>

        <p className="or-text">Or continue with</p>
        <div className="social-icons">
         <button onClick={handleGoogleLogin}  aria-label="Google">
            <svg className="Scoial-icons-a" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path fill="#EA4335" d="M24 9.5c3.2 0 5.6 1.3 7 2.4l5.2-5.2C32.8 3.4 28.6 2 24 2 14.6 2 6.9 7.9 3.7 16h6.9C12.6 11.2 17.7 9.5 24 9.5z"/>
              <path fill="#34A853" d="M24 44c5.9 0 10.9-1.9 14.5-5.1l-6.7-5.5c-2 1.4-4.6 2.3-7.8 2.3-6.2 0-11.4-4.2-13.2-9.8H3.7v6.2C6.9 40.1 14.6 44 24 44z"/>
              <path fill="#4A90E2" d="M44 24c0-1.3-.1-2.3-.3-3.3H24v6.3h11.4c-.6 3-2.5 5.5-5.1 7.2l6.7 5.5C41.7 36.7 44 30.8 44 24z"/>
              <path fill="#FBBC05" d="M10.8 28.9c-.5-1.5-.8-3-.8-4.9s.3-3.4.8-4.9V13H3.7C2.6 16.2 2 19.1 2 24s.6 7.8 1.7 11h7.1z"/>
            </svg>
          </button>

          <button className="google-login-btn" aria-label="Facebook">
          <svg className='Scoial-icons-a' viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" fill="#1877F2">
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.43 0 225.36 0c-73.22 0-121.36 44.38-121.36 124.72v70.62H22.89V288h81.11v224h100.2V288z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
