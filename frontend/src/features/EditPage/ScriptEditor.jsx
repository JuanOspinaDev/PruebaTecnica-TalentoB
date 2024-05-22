import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Toolbar from './ToolBar';
import SceneLine from './SceneLine';
import CharacterAnnotationLine from './CharacterAnnotationLine';
import CharacterLocationLine from './CharacterLocationLine';
import AutoExpandingTextarea from './AutoExpandingTextarea';
import { v4 as uuidv4 } from 'uuid';
import './EditScriptPage.css';
import { saveScene, saveDialogue, saveLocation, saveAction } from '../../services/scriptService';

function ScriptEditor() {
  const { id: scriptIdParam } = useParams(); 
  const scriptId = Number(scriptIdParam);
  const navigate = useNavigate(); 
  const [elements, setElements] = useState([{
    id: uuidv4(),
    type: 'scene',
    subfields: { location: '', place: '', time: '' }
  }]);
  const [focusedElementId, setFocusedElementId] = useState(null);
  const [deleteCounts, setDeleteCounts] = useState({});
  const annotationInputRef = useRef(null);

  useEffect(() => {
    if (annotationInputRef.current) {
      annotationInputRef.current.focus();
      annotationInputRef.current.setSelectionRange(1, 1);
    }
  }, []);

  const addElement = (type) => {
    if (type === 'dialogo') {
      const commonId = uuidv4();
      const characterAnnotationElement = {
        id: uuidv4(),
        type: 'character-annotation',
        commonId: commonId,
        content: '',
        annotation: '()',
      };

      const dialogueElement = {
        id: commonId,
        type: 'dialogo',
        commonId: commonId,
        content: '',
      };

      setElements([...elements, characterAnnotationElement, dialogueElement]);
    } else {
      const newElement = {
        id: uuidv4(),
        type,
        content: '',
        subfields: type === 'scene' ? { location: '', place: '', time: '' } : null,
        annotation: null,
        location: { x: '', y: '', z: '', rotateX: '', rotateY: '', rotateZ: '' },
        character: ''
      };
      setElements([...elements, newElement]);
    }
  };

  const handleChange = (id, field, value) => {
    const newElements = elements.map(element => {
      if (element.id === id) {
        if (element.type === 'scene') {
          return { ...element, subfields: { ...element.subfields, [field]: value } };
        } else if (element.type === 'location') {
          return { ...element, location: { ...element.location, [field]: value } };
        } else {
          return { ...element, [field]: value };
        }
      }
      return element;
    });
    setElements(newElements.filter(element => !(element.content === null && (element.annotation === null || element.annotation === undefined))));
  };

  const handleFocus = (id, type) => {
    if (type === 'character-annotation') {
      setFocusedElementId(id);
    } else {
      setFocusedElementId(null);
    }
  };

  const handleAnnotationClick = () => {
    if (focusedElementId) {
      const newElements = elements.map(element => {
        if (element.id === focusedElementId && element.annotation === null) {
          element.annotation = '()';
          annotationInputRef.current = { elementId: element.id };
        }
        return element;
      });
      setElements(newElements);
    }
  };

  const handleKeyDown = (event, id, field) => {
    if (event.key === 'Backspace' && event.target.value === '') {
      const currentCount = deleteCounts[id]?.[field] || 0;
      if (currentCount === 1) {
        handleChange(id, field, null);
        setDeleteCounts(prev => ({
          ...prev,
          [id]: {
            ...prev[id],
            [field]: 0
          }
        }));
      } else {
        setDeleteCounts(prev => ({
          ...prev,
          [id]: {
            ...prev[id],
            [field]: currentCount + 1
          }
        }));
      }
    } else {
      setDeleteCounts(prev => ({
        ...prev,
        [id]: {
          ...prev[id],
          [field]: 0
        }
      }));
    }
  };

  const saveElements = async () => {
    const groupedElements = [];
    let currentScene = null;
    let sceneOrder = 0;

    for (const element of elements) {
      if (element.type === 'scene') {
        sceneOrder++;
        const scene = {
          int: element.subfields.location,
          number: 1,
          location: element.subfields.place,
          time: element.subfields.time,
          order: sceneOrder,
          scriptId: scriptId, 
        };
        await saveScene(scene);
        currentScene = {
          scene: scene,
          children: [],
        };
        groupedElements.push(currentScene);
      } else if (element.type === 'dialogo') {
        const relatedCharacterAnnotation = elements.find(e => e.commonId === element.commonId && e.type === 'character-annotation');
        const dialogue = {
          dialogue: element.content,
          character: relatedCharacterAnnotation ? relatedCharacterAnnotation.content : '',
          annotation: relatedCharacterAnnotation ? relatedCharacterAnnotation.annotation.replace(/^\(|\)$/g, '') : '',
          sceneId: currentScene.scene.id,
          order: currentScene.children.length + 1,
          scriptId: scriptId, 
        };
        await saveDialogue(dialogue);
        currentScene.children.push(dialogue);
      } else if (element.type === 'action') {
        const action = {
          description: element.content,
          sceneId: currentScene.scene.id,
          order: currentScene.children.length + 1,
          scriptId: scriptId, 
        };
        await saveAction(action);
        currentScene.children.push(action);
      } else if (element.type === 'location') {
        const location = {
          x: element.location.x,
          y: element.location.y,
          z: element.location.z,
          rotationX: element.location.rotateX,
          rotationY: element.location.rotateY,
          rotationZ: element.location.rotateZ,
          sceneId: currentScene.scene.id,
          order: currentScene.children.length + 1,
          scriptId: scriptId, 
        };
        await saveLocation(location);
        currentScene.children.push(location);
      } else if (currentScene) {
        const elementOrder = currentScene.children.length + 1;
        const childElement = {
          ...element,
          order: elementOrder,
          sceneId: currentScene.scene.id,
          scriptId: scriptId, 
        };
        currentScene.children.push(childElement);
      }
    }

    console.log('Grouped elements:', groupedElements); 
  };


  const handleExit = () => {
    navigate('/scriptboard');
  };

  return (
    <div className="editor-container">
      <Toolbar 
        addElement={addElement} 
        isAnnotationEnabled={!!focusedElementId} 
        handleAnnotationClick={handleAnnotationClick}
      />
      <button className="save-button" onClick={saveElements}>Guardar</button>
      <button className="exit-button" onClick={handleExit}>Salir</button>
      <div className="editor">
        {elements.map((element, index) => (
          element.type === 'scene' ? (
            <SceneLine
              key={element.id}
              element={element}
              handleChange={handleChange}
              handleKeyDown={handleKeyDown}
            />
          ) : element.type === 'character-annotation' ? (
            <CharacterAnnotationLine
              key={element.id}
              element={element}
              handleChange={handleChange}
              handleFocus={handleFocus}
              handleKeyDown={handleKeyDown}
              annotationInputRef={element.id === annotationInputRef.current?.elementId ? annotationInputRef : null}
            />
          ) : element.type === 'location' ? (
            <CharacterLocationLine
              key={element.id}
              element={element}
              handleChange={handleChange}
              handleKeyDown={handleKeyDown}
            />
          ) : (
            <AutoExpandingTextarea
              key={element.id}
              element={element}
              handleChange={handleChange}
              handleFocus={handleFocus}
              handleKeyDown={handleKeyDown}
            />
          )
        ))}
      </div>
    </div>
  );
}

export default ScriptEditor;
