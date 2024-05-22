import React from 'react';
import './EditScriptPage.css';

const SceneLine = ({ element, handleChange, handleKeyDown }) => {
  return (
    <div className="scene-line">
      <input
        type="text"
        className="scene-input location"
        value={element.subfields.location}
        onChange={(event) => handleChange(element.id, 'location', event.target.value)}
        onKeyDown={(event) => handleKeyDown(event, element.id, 'location')}
        placeholder="INT/EXT"
      />
      <input
        type="text"
        className="scene-input place"
        value={element.subfields.place}
        onChange={(event) => handleChange(element.id, 'place', event.target.value)}
        onKeyDown={(event) => handleKeyDown(event, element.id, 'place')}
        placeholder="Location"
      />
      <input
        type="text"
        className="scene-input time"
        value={element.subfields.time}
        onChange={(event) => handleChange(element.id, 'time', event.target.value)}
        onKeyDown={(event) => handleKeyDown(event, element.id, 'time')}
        placeholder="Time of Day"
      />
    </div>
  );
};

export default SceneLine;
