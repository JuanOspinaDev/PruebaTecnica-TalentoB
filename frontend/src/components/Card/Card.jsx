import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom'; 
import './Card.css';

const Card = ({ id, title, genre, description, onDelete }) => {
  const navigate = useNavigate(); 

  const handleEdit = () => {
    navigate(`/edit-script/${id}`); 
  };

  return (
    <div className="card">
      <div className="card-header">
        <button onClick={() => onDelete(id)} className="delete-button">
          <FaTrash />
        </button>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <span className="genre-label">{genre}</span>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <button onClick={handleEdit} className="edit-button">
          <FaEdit /> Abrir en editor
        </button>
      </div>
    </div>
  );
};

export default Card;
