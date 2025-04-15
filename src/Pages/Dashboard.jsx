import React from 'react';
import '../Styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Welcome to Your Dashboard</h1>

      <div className="stats-section">
        <div className="stat-card glass-card">
          <h2>3</h2>
          <p>Connected Apps</p>
        </div>
        <div className="stat-card glass-card">
          <h2>12</h2>
          <p>Unread Messages</p>
        </div>
        <div className="stat-card glass-card">
          <h2>5</h2>
          <p>Scheduled Posts</p>
        </div>
      </div>

      <div className="actions-section">
        <button className="action-btn neon-btn">+ Add New App</button>
        <button className="action-btn neon-btn">📤 Post Update</button>
        <button className="action-btn neon-btn">💬 Open Chat</button>
      </div>

      <div className="recent-activity-section glass-panel">
        <h3>Recent Activities</h3>
        <ul>
          <li>Instagram post scheduled for 4:00 PM today</li>
          <li>New message received from Twitter</li>
          <li>Facebook connected successfully</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
