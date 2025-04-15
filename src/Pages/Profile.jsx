import React, { useState } from 'react';
import '../Dashbaord_CSS/Profile.css';
import { FaCamera } from 'react-icons/fa';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Love Kumar',
    username: 'lovek_123',
    email: 'love@example.com',
    location: 'Noida, India',
    joined: 'Jan 5, 2024',
    profilePic: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
    coverPhoto: 'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1350&q=80'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const fileURL = URL.createObjectURL(files[0]);
      setProfile((prev) => ({
        ...prev,
        [name]: fileURL
      }));
    }
  };

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="profile-container">
      <div className="cover-photo">
        <img src={profile.coverPhoto} alt="Cover" />
        {editMode && (
          <div className="edit-icon cover-edit">
            <label htmlFor="cover-upload">
              <FaCamera />
              <input
                type="file"
                id="cover-upload"
                name="coverPhoto"
                onChange={handleFileChange}
                hidden
              />
            </label>
          </div>
        )}
      </div>

      <div className="profile-content">
        <div className="profile-pic">
          <img src={profile.profilePic} alt="Profile" />
          {editMode && (
            <div className="edit-icon profile-edit">
              <label htmlFor="profile-upload">
                <FaCamera />
                <input
                  type="file"
                  id="profile-upload"
                  name="profilePic"
                  onChange={handleFileChange}
                  hidden
                />
              </label>
            </div>
          )}
        </div>

        {editMode ? (
          <div className="profile-form">
            <input type="text" name="name" value={profile.name} onChange={handleChange} />
            <input type="text" name="username" value={profile.username} onChange={handleChange} />
            <input type="email" name="email" value={profile.email} onChange={handleChange} />
            <input type="text" name="location" value={profile.location} onChange={handleChange} />
            <button className="save-btn" onClick={toggleEdit}>Save</button>
          </div>
        ) : (
          <div className="profile-info">
            <h2>{profile.name}</h2>
            <p><strong>@{profile.username}</strong></p>
            <p>{profile.email}</p>
            <p>{profile.location}</p>
            <p><small>Joined: {profile.joined}</small></p>
            <button className="edit-btn" onClick={toggleEdit}>Edit Profile</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
