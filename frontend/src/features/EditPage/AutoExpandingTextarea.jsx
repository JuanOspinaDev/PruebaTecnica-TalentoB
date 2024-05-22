import React, { useRef, useEffect } from 'react';

const AutoExpandingTextarea = ({ element, handleChange, handleFocus, handleKeyDown }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  }, [element.content]);

  return (
    <textarea
      ref={textareaRef}
      className={`element ${element.type}`}
      value={element.content}
      onChange={(event) => handleChange(element.id, 'content', event.target.value)}
      onKeyDown={(event) => handleKeyDown(event, element.id, 'content')}
      onFocus={() => handleFocus(element.id, element.type)}
      onBlur={() => handleFocus(null)}
      placeholder={element.type}
      rows="1"
      style={{
        width: '100%',
        padding: '10px',
        margin: '5px 0',
        border: '1px solid #ddd',
        fontSize: '18px',
        fontFamily: 'Courier New, Courier, monospace',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        border: 'none',
        outline: 'none',
        resize: 'none',
        overflow: 'hidden',
        paddingTop: '10px',
        paddingBottom: '10px'
      }}
    />
  );
};

export default AutoExpandingTextarea;
