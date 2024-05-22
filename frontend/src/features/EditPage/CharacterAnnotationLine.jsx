import React, { useRef, useEffect } from 'react';
import './CharacterAnnotationLine.css';

const CharacterAnnotationLine = ({ element, handleChange, handleFocus, handleKeyDown, annotationInputRef }) => {
  const localInputRef = useRef(null);
  const inputRef = annotationInputRef || localInputRef;

  const handleClick = () => {
    if (inputRef.current) {
      const cursorPosition = inputRef.current.value.length - 1;
      inputRef.current.setSelectionRange(1, cursorPosition);
    }
  };

  const handleAnnotationChange = (id, field, value) => {
    const newValue = value.replace(/^\(|\)$/g, '');
    handleChange(id, field, newValue);
  };

  useEffect(() => {
    if (element.annotation === '()' && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(1, 1);
    }
  }, [element.annotation, inputRef]);

  return (
    <div className="character-annotation-line">
      <input
        type="text"
        className="element character"
        value={element.content}
        onChange={(event) => handleChange(element.id, 'content', event.target.value)}
        onKeyDown={(event) => handleKeyDown(event, element.id, 'content')}
        onFocus={() => handleFocus(element.id, element.type)}
        onBlur={() => handleFocus(null)}
        placeholder="Personaje"
      />
      {element.annotation !== null && (
        <input
          type="text"
          className="element annotation"
          value={`(${element.annotation})`} 
          onChange={(event) => handleAnnotationChange(element.id, 'annotation', event.target.value)}
          onKeyDown={(event) => handleKeyDown(event, element.id, 'annotation')}
          onClick={handleClick}
          placeholder="(Anotación)"
          ref={inputRef}
        />
      )}
    </div>
  );
};

export default CharacterAnnotationLine;
