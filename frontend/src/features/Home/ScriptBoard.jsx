import React, { useState, useEffect } from 'react';
import { fetchScripts, addScript } from '../../services/scriptService';
import Card from '../../components/Card/Card';
import ScriptCreationForm from './ScriptCreation';
import NavBar from '../../components/NavBar/NavBar'; 

import './ScriptBoard.css';

function ScriptBoard() {
    const [scripts, setScripts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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
  

    const filteredScripts = scripts.filter(script =>
        script.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <NavBar searchTerm={searchTerm} onSearchTermChange={handleSearchChange} onSearch={() => {}} />
            <ScriptCreationForm onAddScript={handleAddScript} />
            <div className="home-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {filteredScripts.map(script => (
                    <Card key={script.id} title={script.title} genre={script.genre} description={script.description} />
                ))}
            </div>
        </>
    );
}

export default ScriptBoard;
