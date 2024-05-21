import React from 'react';
import './Card.css';

const Card = ({ title, genre, description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        <span className="genre-label">{genre}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
