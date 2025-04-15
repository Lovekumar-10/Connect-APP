import React from 'react';
import '../Dashbaord_CSS/Analytics.css';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from 'recharts';

const activityData = [
  { name: 'Mon', Posts: 30, Messages: 120 },
  { name: 'Tue', Posts: 45, Messages: 90 },
  { name: 'Wed', Posts: 60, Messages: 140 },
  { name: 'Thu', Posts: 80, Messages: 200 },
  { name: 'Fri', Posts: 50, Messages: 100 },
  { name: 'Sat', Posts: 20, Messages: 60 },
  { name: 'Sun', Posts: 70, Messages: 180 },
];

const platformSummary = [
  { platform: 'Facebook', posts: 60, likes: 800, messages: 100 },
  { platform: 'Instagram', posts: 40, likes: 300, messages: 90 },
  { platform: 'Twitter', posts: 20, likes: 130, messages: 30 },
];

const topPosts = [
  { title: 'How to stay consistent online?', likes: 500 },
  { title: 'My growth story on Instagram', likes: 430 },
  { title: 'Tips for Reels that go viral', likes: 300 },
];

const Analyticss = () => {
  return (
    <div className="analytics-container">
      <h2>📊 Analytics Dashboard</h2>

      <div className="summary-cards">
        <div className="card">📝 Total Posts: <span>120</span></div>
        <div className="card">💬 Messages Sent: <span>320</span></div>
        <div className="card">❤️ Total Likes: <span>1,230</span></div>
        <div className="card">⏳ Time Spent: <span>14h</span></div>
      </div>

      <div className="section">
        <h3>📈 Weekly Activity Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={activityData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <Line type="monotone" dataKey="Posts" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="Messages" stroke="#82ca9d" strokeWidth={2} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="section">
        <h3>🌐 Platform Summary</h3>
        <table className="platform-table">
          <thead>
            <tr>
              <th>Platform</th>
              <th>Posts</th>
              <th>Likes</th>
              <th>Messages</th>
            </tr>
          </thead>
          <tbody>
            {platformSummary.map((data, idx) => (
              <tr key={idx}>
                <td>{data.platform}</td>
                <td>{data.posts}</td>
                <td>{data.likes}</td>
                <td>{data.messages}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h3>🔥 Top Performing Posts</h3>
        <ul className="top-posts">
          {topPosts.map((post, idx) => (
            <li key={idx}>
              <span>{post.title}</span> – <strong>{post.likes} likes</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Analyticss;
