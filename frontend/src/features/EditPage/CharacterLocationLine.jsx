import React, { useEffect, useRef } from 'react';
import './CharacterLocationLine.css';

const CharacterLocationLine = ({ element, handleChange, handleKeyDown }) => {
  const localInputRef = useRef(null);
  const inputRef = localInputRef;

  useEffect(() => {
    if (element.annotation === '()' && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(1, 1);
    }
  }, [element.annotation, inputRef]);

  const handleLocationChange = (id, field, value) => {
    if (value.length <= 2) {
      handleChange(id, field, value);
    }
  };

  return (
    <div className="character-location-line">
      <input
        type="text"
        className="elementcharacter"
        value={element.character}
        onChange={(event) => handleChange(element.id, 'character', event.target.value)}
        onKeyDown={(event) => handleKeyDown(event, element.id, 'character')}
        placeholder="Personaje"
      />
      <input
        type="text"
        className="element location-input"
        value={element.location.x}
        onChange={(event) => handleLocationChange(element.id, 'x', event.target.value)}
        onKeyDown={(event) => handleKeyDown(event, element.id, 'x')}
        placeholder="x"
      />
      <input
        type="text"
        className="element location-input"
        value={element.location.y}
        onChange={(event) => handleLocationChange(element.id, 'y', event.target.value)}
        onKeyDown={(event) => handleKeyDown(event, element.id, 'y')}
        placeholder="y"
      />
      <input
        type="text"
        className="element location-input"
        value={element.location.z}
        onChange={(event) => handleLocationChange(element.id, 'z', event.target.value)}
        onKeyDown={(event) => handleKeyDown(event, element.id, 'z')}
        placeholder="z"
      />
      <input
        type="text"
        className="element location-input"
        value={element.location.rotX}
        onChange={(event) => handleLocationChange(element.id, 'rotX', event.target.value)}
        onKeyDown={(event) => handleKeyDown(event, element.id, 'rotX')}
        placeholder="rotX"
      />
      <input
        type="text"
        className="element location-input"
        value={element.location.rotY}
        onChange={(event) => handleLocationChange(element.id, 'rotY', event.target.value)}
        onKeyDown={(event) => handleKeyDown(event, element.id, 'rotY')}
        placeholder="rotY"
      />
      <input
        type="text"
        className="element location-input"
        value={element.location.rotZ}
        onChange={(event) => handleLocationChange(element.id, 'rotZ', event.target.value)}
        onKeyDown={(event) => handleKeyDown(event, element.id, 'rotZ')}
        placeholder="rotZ"
      />
    </div>
  );
};

export default CharacterLocationLine;
