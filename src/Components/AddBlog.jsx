import '../Styles/AddBlog.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 🔹 Step 1

const AddBlog = ({ onAdd }) => {
  const navigate = useNavigate(); // 🔹 Step 2

  const [formData, setFormData] = useState({
    title: '',
    image: '',
    content: '',
    author: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now().toString(),
      ...formData
    };
    onAdd(newBlog);
    setFormData({ title: '', image: '', content: '', author: '', date: '' });
    alert("Blog has been added successfully!");
    navigate('/blog'); // 🔹 Step 3: Redirect to blog list page
  };

  return (
    <form className="add-blog-form" onSubmit={handleSubmit}>
      <h2>Add a New Blog</h2>

      <input 
        type="text"
        name="title"
        placeholder="Enter blog title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <input 
        type="text"
        name="image"
        placeholder="Enter image URL (optional)"
        value={formData.image}
        onChange={handleChange}
      />

      <input 
        type="text"
        name="author"
        placeholder="Your name"
        value={formData.author}
        onChange={handleChange}
        required
      />

      <input 
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <textarea 
        name="content"
        placeholder="Write your blog content here..."
        value={formData.content}
        onChange={handleChange}
        required
      />

      <button type="submit">Publish Blog</button>
    </form>
  );
};

export default AddBlog;
