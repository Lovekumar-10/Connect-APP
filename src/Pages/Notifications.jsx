import "../Dashbaord_CSS/Notifications.css";
import React, { useState } from "react";
import notificationsData from "./dashboardPages/notificationsData.js";

const platformIcons = {
  facebook: (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
      alt="Facebook"
      className="icon-svg"
    />
  ),
  instagram: (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
      alt="Instagram"
      className="icon-svg"
    />
  ),
  twitter: (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
      alt="Twitter"
      className="icon-svg"
    />
  ),
};

const Notifications = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState([]);

  const filteredNotifications =
    filter === "all"
      ? notifications
      : notifications.filter((n) => n.platform === filter);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    const ids = filteredNotifications.map((n) => n.id);
    setSelected(ids);
  };

  const clearAll = () => {
    setSelected([]);
  };

  const deleteSelected = () => {
    const updated = notifications.filter((n) => !selected.includes(n.id));
    setNotifications(updated);
    setSelected([]);
  };

  return (
    <>
    <div className="notification-page">
      <h2>Notifications</h2>

      
      <div className="filter-buttons">
        <button
          onClick={() => setFilter("all")}
          className={`all ${filter === "all" ? "active" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("facebook")}
          className={`facebook ${filter === "facebook" ? "active" : ""}`}
        >
          Facebook
        </button>
        <button
          onClick={() => setFilter("instagram")}
          className={`instagram ${filter === "instagram" ? "active" : ""}`}
        >
          Instagram
        </button>
        <button
          onClick={() => setFilter("twitter")}
          className={`twitter ${filter === "twitter" ? "active" : ""}`}
        >
          Twitter
        </button>
      </div>

      <div className="action-bar">
        <button onClick={selectAll}>Select All</button>
        <button onClick={clearAll}>Clear</button>
        <button
          onClick={deleteSelected}
          className="delete-btn"
          disabled={selected.length === 0}
        >
          Delete Selected ({selected.length})
        </button>
    

      </div>


      <div className="notification-list">
        {filteredNotifications.length === 0 ? (
          <div className="empty-msg">No notifications available</div>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              className={`notification-item ${
                selected.includes(notification.id) ? "selected" : ""
              }`}
              key={notification.id}
              onClick={() => toggleSelect(notification.id)}
            >
              <div className="platform-icon">
                {platformIcons[notification.platform]}
              </div>
              <div className="content">
                <div className="message">{notification.message}</div>
                <div className="time">{notification.time}</div>
              </div>
              <div className="checkmark">
                {selected.includes(notification.id) && <span>✔</span>}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </>
    
  );
};

export default Notifications;
