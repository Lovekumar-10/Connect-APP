import React from 'react';
import './Card.css';

const Card = ({ title, description, image }) => {
  return (
    <div className="card-container">
      <div className="card-left">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="card-right">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default Card;

