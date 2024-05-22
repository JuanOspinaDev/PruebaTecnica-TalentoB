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
        className="element character"
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
        value={element.location.rotateX}
        onChange={(event) => handleLocationChange(element.id, 'rotateX', event.target.value)}
        onKeyDown={(event) => handleKeyDown(event, element.id, 'rotateX')}
        placeholder="rotateX"
      />
      <input
        type="text"
        className="element location-input"
        value={element.location.rotateY}
        onChange={(event) => handleLocationChange(element.id, 'rotateY', event.target.value)}
        onKeyDown={(event) => handleKeyDown(event, element.id, 'rotateY')}
        placeholder="rotateY"
      />
      <input
        type="text"
        className="element location-input"
        value={element.location.rotateZ}
        onChange={(event) => handleLocationChange(element.id, 'rotateZ', event.target.value)}
        onKeyDown={(event) => handleKeyDown(event, element.id, 'rotateZ')}
        placeholder="rotateZ"
      />
    </div>
  );
};

export default CharacterLocationLine;
