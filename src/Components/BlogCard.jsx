import React, { useState } from 'react';
import '../Styles/BlogCard.css';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    navigate(`/blog/${blog.id}`);
  };

  return (
    <div className="blog-card" onClick={handleClick}>
      {blog.image && !imageError ? (
        <img
          src={blog.image}
          alt=""
          className="blog-img"
          onError={() => setImageError(true)} // 👈 this handles broken image
        />
      ) : (
        <div className="no-image">No Image</div>
      )}

      <div className="blog-content">
        <h3>{blog.title}</h3>
        <p className="blog-meta">
          By <strong>{blog.author || 'Unknown'}</strong> on{' '}
          {blog.date ? new Date(blog.date).toLocaleDateString() : 'N/A'}
        </p>
        <p className="blog-snippet">
          {blog.content.length > 100
            ? blog.content.substring(0, 100) + '...'
            : blog.content}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
