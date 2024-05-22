import React from 'react';
import { GiClapperboard } from "react-icons/gi";
import { FaBullhorn, FaCommentDots, FaMapMarkerAlt } from "react-icons/fa";
import './ToolBar.css';

const Toolbar = ({ addElement }) => {
  return (
    <div className="toolbar">
      <button onClick={() => addElement('scene')}>
        <GiClapperboard />
        <span>Escena</span>
      </button>
      <button onClick={() => addElement('action')}>
        <FaBullhorn />
        <span>Acción</span>
      </button>
      <button onClick={() => addElement('dialogo')}>
        <FaCommentDots />
        <span>Diálogo</span>
      </button>
      <button onClick={() => addElement('location')}>
        <FaMapMarkerAlt />
        <span>Ubicación</span>
      </button>
    </div>
  );
};

export default Toolbar;
