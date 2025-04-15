import React, { useState } from 'react';
import '../Dashbaord_CSS/Posts.css';

const Posts = () => {
  const [form, setForm] = useState({
    title: '',
    caption: '',
    media: '',
    platform: '',
    scheduleNow: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Post Submitted:', form);
  };

  return (
    <div className="post-container">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="caption"
          placeholder="Write your caption here..."
          value={form.caption}
          onChange={handleChange}
          required
        ></textarea>

        <input
          type="text"
          name="media"
          placeholder="Media URL (image/video)"
          value={form.media}
          onChange={handleChange}
        />

        <select name="platform" value={form.platform} onChange={handleChange} required>
          <option value="">Select Platform</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Twitter">Twitter</option>
        </select>

        <label className="checkbox">
          <input
            type="checkbox"
            name="scheduleNow"
            checked={form.scheduleNow}
            onChange={handleChange}
          />
          Post Now
        </label>

        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default Posts;
