import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import ScriptCreationForm from './ScriptCreation';
import NavBar from '../../components/NavBar/NavBar'; 

import './HomePage.css';

function HomePage() {
    const [scripts, setScripts] = useState([
      { id: 1, title: 'Guion 1', content: 'Descripción del Guion 1' },
      { id: 2, title: 'Guion 2', content: 'Descripción del Guion 2' },
      { id: 3, title: 'Guion 3', content: 'Descripción del Guion 3' },
    ]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
    };

    const handleAddScript = (title, content) => {
      const newScript = {
        id: Math.random(),
        title: title,
        content: content
      };
      setScripts(prevScripts => [...prevScripts, newScript]);
    };

    const filteredScripts = scripts.filter(script =>
      script.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <>
        <NavBar searchTerm={searchTerm} onSearchTermChange={handleSearchChange} onSearch={handleSearch} />
        <ScriptCreationForm onAddScript={handleAddScript} />
        <div className="home-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {filteredScripts.map(script => (
            <Card key={script.id} title={script.title} content={script.content} />
          ))}
        </div>
      </>
    );
}

export default HomePage;
