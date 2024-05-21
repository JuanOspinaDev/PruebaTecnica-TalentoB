import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './ScriptCreation.css'; 

const ScriptCreationForm = ({ onAddScript }) => {
  const [scriptTitle, setScriptTitle] = useState('');
  const [scriptDescription, setScriptDescription] = useState('');
  const [scriptGenre, setScriptGenre] = useState(''); 

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddScript({ title: scriptTitle, genre: scriptGenre, description: scriptDescription }); 
    setScriptTitle('');
    setScriptGenre('');
    setScriptDescription('');
  };  

  return (
    <div className="script-creation-section">
      <h3>Crear guion</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título del guion"
          value={scriptTitle}
          onChange={(e) => setScriptTitle(e.target.value)}
          className="script-title-input"
        />
        
        <TextareaAutosize
          placeholder="Escribe la descripción del guion aquí..."
          value={scriptDescription}
          onChange={(e) => setScriptDescription(e.target.value)}
          maxRows={10}
          className="script-content-textarea"
        />
        <select
          value={scriptGenre}
          onChange={(e) => setScriptGenre(e.target.value)}
          className="script-genre-select"
        >
          <option value="">Seleccione el género</option>
          <option value="comedia">Comedia</option>
          <option value="drama">Drama</option>
          <option value="thriller">Thriller</option>
          <option value="terror">Terror</option>
          <option value="accion">Accion</option>
          <option value="ciencia-ficcion">Ciencia Ficción</option>
          <option value="documental">Documental</option>
        </select>
        <button className="buttonscript" type="submit">Guardar Guion</button>
      </form>
    </div>
  );
};

export default ScriptCreationForm;
