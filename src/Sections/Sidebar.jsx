import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaInbox,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaCommentDots,
  FaChartBar,
  FaThLarge,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "../Styles/Sidebar.css";

const Sidebar = ({ isSidebarOpen }) => {
  const [appsOpen, setAppsOpen] = useState(false);
  const location = useLocation();

  const toggleApps = () => setAppsOpen(!appsOpen);
  const isActive = (path) => location.pathname === path;

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="title">Dashboard</div>
      <hr />

      <Link to="/dashboard" className={`menu-item ${isActive("/") ? "active" : ""}`}>
        <div className="icon-container">
          <FaHome />
        </div>
        Home
      </Link>

      <Link
        to="/dashboard/inbox"
        className={`menu-item ${isActive("/inbox") ? "active" : ""}`}
      >
        <div className="icon-container">
          <FaInbox />
        </div>
        Inbox
      </Link>

      <Link
        to="/dashboard/chat"
        className={`menu-item ${isActive("/chat") ? "active" : ""}`}
      >
        <div className="icon-container">
          <FaCommentDots />
        </div>
        Chat
      </Link>

      <Link
        to="/dashboard/posts"
        className={`menu-item ${isActive("/posts") ? "active" : ""}`}
      >
        <div className="icon-container">
          <FaThLarge />
        </div>
        Posts
      </Link>

      <Link
        to="/dashboard/analytics"
        className={`menu-item ${isActive("/analytics") ? "active" : ""}`}
      >
        <div className="icon-container">
          <FaChartBar />
        </div>
        Analytics
      </Link>

      {/* Apps Integration Section */}
      <div className="menu-item" onClick={toggleApps}>
        <div className="icon-container">
          <FaThLarge />
        </div>
        Apps Integration
        <span style={{ marginLeft: "auto" }}>
          {appsOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      <div className={`submenu ${appsOpen ? "open" : ""}`}>
        <Link
          to="/dashboard/facebook"
          className={`menu-item ${isActive("/apps/facebook") ? "active" : ""}`}
        >
          <div className="icon-container">
            <FaFacebook />
          </div>
          Facebook
        </Link>

        <Link
          to="/dashboard/instagram"
          className={`menu-item ${isActive("/apps/instagram") ? "active" : ""}`}
        >
          <div className="icon-container">
            <FaInstagram />
          </div>
          Instagram
        </Link>

        <Link
          to="/dashboard/telegram"
          className={`menu-item ${isActive("/apps/telegram") ? "active" : ""}`}
        >
          <div className="icon-container">
            <FaTwitter />
          </div>
          Twitter
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
