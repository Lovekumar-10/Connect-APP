import '../Styles/Topbar.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBell, FaUserCircle } from 'react-icons/fa';

const Topbar = ({ onToggleSidebar }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className='Humbuger'>
        <FaBars onClick={onToggleSidebar} />
        </button>
        
        <h2 className="logo">Connect</h2>
      </div>

      <div className="topbar-center">
        {window.innerWidth > 480 && (
          <>
            {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
          </>
        )}
      </div>

      <div className="topbar-right">
        <Link to="/dashboard/notifications" className="icon-button">
          <FaBell />
        </Link>

        <div className={`dropdown ${showDropdown ? 'show' : ''}`} ref={dropdownRef}>
          <button className="icon-button-2" onClick={toggleDropdown}>
            <FaUserCircle />
          </button>

          <div className="dropdown-content">
            <Link to="/dashboard/profile">Profile</Link>
            <Link to="/logout">Logout</Link> 
            <Link to="/dashboard/settings">Settings</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
