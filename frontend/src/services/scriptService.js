import {jwtDecode} from 'jwt-decode';

const getGuionistaIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
        const decodedToken = jwtDecode(token);
        return decodedToken.user.id; 
    }
    return null;
};

const baseURL = 'http://localhost:3000/api/scripts/'; 
const baseURLScene = 'http://localhost:3000/api/'; 

const getHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  };
};

export const fetchScripts = async () => {
    try {
        const guionistaId = getGuionistaIdFromToken(); 
        if (!guionistaId) throw new Error("Guionista ID not found");

        const urlWithGuionistaId = `${baseURL}scriptwriter/${guionistaId}`;
        const response = await fetch(urlWithGuionistaId, { headers: getHeaders() });
        if (!response.ok) throw new Error('Network response was not ok');

        const scripts = await response.json();
        return scripts;
    } catch (error) {
        console.error("Failed to fetch scripts: ", error);
        throw error; 
    }
};

export const addScript = async (scriptData) => {
    const guionistaId = getGuionistaIdFromToken(); 
    if (!guionistaId) throw new Error("Guionista ID not found");

    const script = { ...scriptData, guionistaId };
    try {
        const response = await fetch(`${baseURL}`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(script)
        });
        if (!response.ok) throw new Error('Failed to create script');

        const newScript = await response.json();
        return newScript;
    } catch (error) {
        console.error("Failed to add script: ", error);
        throw error;
    }
};

export const deleteScript = async (id) => {
    try {
        const response = await fetch(`${baseURL}${id}`, {
            method: 'DELETE',
            headers: getHeaders()
        });
        if (!response.ok) throw new Error('Failed to delete script');
    } catch (error) {
        console.error("Failed to delete script: ", error);
        throw error;
    }
};

export const saveScene = async (scene) => {
    try {
        const id = scene.scriptId;
        console.log(scene);
        const response = await fetch(`${baseURLScene}scenes/${id}`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(scene)
        });
        const data = await response.json();
        if (!response.ok) {
            console.error('Error:', data);
            throw new Error('Failed to save scene');
        }
        scene.id = data.id
        console.log(scene.id)
        console.log('Success:', data);
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const saveDialogue = async (dialogue) => {
    try {
        const id = dialogue.scriptId;
        console.log(dialogue);
        const response = await fetch(`${baseURLScene}dialogues/${id}`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(dialogue)
        });
        const data = await response.json();
        if (!response.ok) {
            console.error('Error:', data);
            throw new Error('Failed to save dialogue');
        }
        console.log('Success:', data);
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const saveLocation = async (location) => {
    try {
        const response = await fetch(`${baseURLScene}location`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(location)
        });
        const data = await response.json();
        if (!response.ok) {
            console.error('Error:', data);
            throw new Error('Failed to save location');
        }
        console.log('Success:', data);
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const saveAction = async (action) => {
    try {
        const response = await fetch(`${baseURLScene}action`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(action)
        });
        const data = await response.json();
        if (!response.ok) {
            console.error('Error:', data);
            throw new Error('Failed to save action');
        }
        console.log('Success:', data);
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
