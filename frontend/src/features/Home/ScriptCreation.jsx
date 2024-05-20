import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './ScriptCreation.css'; 

const ScriptCreationForm = ({ onAddScript }) => {
  const [scriptTitle, setScriptTitle] = useState('');
  const [scriptContent, setScriptContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddScript(scriptTitle, scriptContent); 
    setScriptTitle('');
    setScriptContent('');
  };

  return (
    <div className="script-creation-section">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título del guion"
          value={scriptTitle}
          onChange={(e) => setScriptTitle(e.target.value)}
          className="script-title-input"
        />
        <TextareaAutosize
          placeholder="Escribe el contenido del guion aquí..."
          value={scriptContent}
          onChange={(e) => setScriptContent(e.target.value)}
          maxRows={10}
          className="script-content-textarea"
        />
        <button text="Guardar Guion" type="submit" />
      </form>
    </div>
  );
};

export default ScriptCreationForm;
