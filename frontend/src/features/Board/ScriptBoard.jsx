import React, { useState, useEffect } from 'react';
import { fetchScripts, addScript, deleteScript } from '../../services/scriptService';
import Card from '../../components/Card/Card';
import ScriptCreationForm from './ScriptCreation';
import NavBar from '../../components/NavBar/NavBar'; 
import './ScriptBoard.css';

function ScriptBoard() {
    const [scripts, setScripts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentScriptId, setCurrentScriptId] = useState(null);

    const ModalRemove = ({ isOpen, onClose, onConfirm, children }) => {
      if (!isOpen) return null;
  
      return (
          <div className="rem-modal-overlay">
              <div className="rem-modal">
                  <div className="rem-modal-content">{children}</div>
                  <div className="rem-modal-actions">
                      <button onClick={onConfirm} className="rem-modal-confirm">Confirmar</button>
                      <button onClick={onClose} className="rem-modal-close">Cancelar</button>
                  </div>
              </div>
          </div>
      );
  };
    useEffect(() => {
        const initFetch = async () => {
            try {
                const loadedScripts = await fetchScripts();
                setScripts(loadedScripts);
            } catch (error) {
                console.error('Error fetching scripts: ', error);
            }
        };
        initFetch();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleAddScript = async (script) => {
      try {
          const newScript = await addScript(script);
          setScripts(prevScripts => [...prevScripts, newScript]);
      } catch (error) {
          console.error('Error adding script: ', error);
      }
    };

    const handleDeleteScript = async () => {
      try {
          await deleteScript(currentScriptId);
          setScripts(scripts => scripts.filter(script => script.id !== currentScriptId));
          closeModal(); 
      } catch (error) {
          console.error('Error deleting script: ', error);
      }
  };

  const openModal = (id) => {
    setCurrentScriptId(id);
    setModalOpen(true);
};

const closeModal = () => {
    setModalOpen(false);
};

    const filteredScripts = scripts.filter(script =>
        script.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <NavBar searchTerm={searchTerm} onSearchTermChange={handleSearchChange} />
            <ScriptCreationForm onAddScript={handleAddScript} />
            <div className="home-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {filteredScripts.map(script => (
                    <Card 
                        key={script.id} 
                        id={script.id}
                        title={script.title} 
                        genre={script.genre} 
                        description={script.description}
                        onDelete={() => openModal(script.id)}                    />
                ))}
            </div>
            <ModalRemove isOpen={isModalOpen} onClose={closeModal} onConfirm={handleDeleteScript}>
                <p className='remove-message'>Estas seguro de que deseas eliminar este guión?</p>
            </ModalRemove>
        </>
    );
}

export default ScriptBoard;
