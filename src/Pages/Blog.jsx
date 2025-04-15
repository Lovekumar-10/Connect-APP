import React from 'react';
import BlogCard from '../Components/BlogCard';
import { useNavigate } from 'react-router-dom';
import "../Styles/blog.css";

const Blog = ({ blogs }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="blog-page">
        <div className="blog-header">
          <button className="write-blog-btn" onClick={() => navigate('/write-blog')}>
             Write a Blog
          </button>
          <h2>Recent Blogs</h2>
        </div>

        <div className="blog-list">
          {blogs.length > 0 ? (
            blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <p className="no-blogs">No blogs available. Start writing!</p>
          )}
        </div>
      </div>

    </>
  );
};

export default Blog;
