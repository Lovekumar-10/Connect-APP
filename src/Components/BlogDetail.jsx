import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/BlogDetail.css';

const BlogDetail = ({ blogs }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const blog = blogs.find(blog => blog.id === id);

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [id]);

  if (!blog) {
    return <h2 className="not-found">Blog Not Found</h2>;
  }

  const blogIndex = blogs.findIndex(b => b.id === id);

  const goBack = () => navigate(-1);
  const goNext = () => {
    const nextBlog = blogs[blogIndex + 1];
    if (nextBlog) {
      navigate(`/blog/${nextBlog.id}`);
    }
  };

  return (
    <div className="blog-detail-container">
      <div className="blog-image-wrapper">
        {!imageLoaded && !imageError && (
          <div className="blog-image-placeholder">Loading image…</div>
        )}

        {blog.image && !imageError && (
          <img
            src={blog.image}
            alt={blog.title}
            className={`blog-detail-image ${imageLoaded ? 'visible' : 'hidden'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}

        {imageError && (
          <div className="blog-detail-no-image">No Image</div>
        )}
      </div>

      <div className="blog-detail-meta">
        <span className="author">Author :- {blog.author || 'Unknown Author'}</span>
        <span className="date">Date :- {blog.date ? new Date(blog.date).toLocaleDateString() : 'Unknown Date'}</span>
      </div>

      <h1 className="blog-detail-title">{blog.title}</h1>
      <p className="blog-detail-content">{blog.content}</p>

      <div className="blog-detail-nav-buttons">
        <button onClick={goBack} className="nav-btn">← Back</button>
        {blogIndex + 1 < blogs.length && (
          <button onClick={goNext} className="nav-btn">Next →</button>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
