import React from 'react';
import './Card.css';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
