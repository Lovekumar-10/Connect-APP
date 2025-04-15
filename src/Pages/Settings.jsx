import React, { useState } from 'react';
import '../Dashbaord_CSS/Settings.css';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [language, setLanguage] = useState('English');

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your account? This cannot be undone.');
    if (confirmDelete) {
      // delete logic
      alert('Account deleted (mock action)');
    }
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>

      <div className="setting-section">
        <h3>Appearance</h3>
        <label className="setting-item">
          <span>Dark Mode</span>
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </label>
      </div>

      <div className="setting-section">
        <h3>Notifications</h3>
        <label className="setting-item">
          <span>Enable Notifications</span>
          <input type="checkbox" checked={notificationsEnabled} onChange={() => setNotificationsEnabled(!notificationsEnabled)} />
        </label>
      </div>

      <div className="setting-section">
        <h3>Privacy</h3>
        <label className="setting-item">
          <span>Show Online Status</span>
          <input type="checkbox" checked={onlineStatus} onChange={() => setOnlineStatus(!onlineStatus)} />
        </label>
      </div>

      <div className="setting-section">
        <h3>Language</h3>
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="dropdown-list">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>

      <div className="setting-section">
        <h3>Account</h3>
        <button className="btn-change-password">Change Password</button>
        <button className="btn-danger" onClick={handleDeleteAccount}>Delete Account</button>
      </div>
    </div>
  );
};

export default Settings;
