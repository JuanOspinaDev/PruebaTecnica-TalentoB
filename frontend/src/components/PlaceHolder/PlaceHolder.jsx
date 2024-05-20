import React from 'react';
import './Placeholder.css';

const Placeholder = ({ icon: Icon, text }) => (
  <div className="placeholder">
    <Icon className="placeholder-icon" />
    <p className="placeholder-text">{text}</p>
  </div>
);

export default Placeholder;
