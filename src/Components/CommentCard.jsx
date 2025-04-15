import React from 'react';
import '../Styles/CommentCard.css';

const CommentCard = ({ image, name, comment }) => {
  return (
    <div className="comment-card">
      <div className="user-img">
        <img src={image} alt={name} />
      </div>
      <p className="user-comment">“{comment}”</p>
      <h4 className="user-name">{name}</h4>
    </div>
  );
};

export default CommentCard;
