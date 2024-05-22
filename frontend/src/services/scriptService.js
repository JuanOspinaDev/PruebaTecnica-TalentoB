import { jwtDecode } from 'jwt-decode';

const getGuionistaIdFromToken = () => {
    const token = localStorage.getItem('token');
    console.log(token)
    if (token) {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken.user)
        console.log(decodedToken.user.id)
        return decodedToken.user.id; 
    }
    return null;
};


const baseURL = 'http://localhost:3000/api/scripts/'; 


export const fetchScripts = async () => {
    try {
        const token = localStorage.getItem('token'); 
        const guionistaId = getGuionistaIdFromToken(); 

        if (!guionistaId) {
            throw new Error("Guionista ID not found");
        }

        const urlWithGuionistaId = `${baseURL}scriptwriter/${guionistaId}`;
        console.log(urlWithGuionistaId)
        const response = await fetch(urlWithGuionistaId, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}` 
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const scripts = await response.json();
        return scripts;
    } catch (error) {
        console.error("Failed to fetch scripts: ", error);
        throw error; 
    }
};

export const addScript = async (scriptData) => {
    const token = localStorage.getItem('token'); 
    const guionistaId = getGuionistaIdFromToken(); 

    if (!guionistaId) {
        throw new Error("Guionista ID not found");
    }

    const script = {
        ...scriptData,
        guionistaId  
    };

    try {
        const response = await fetch(`${baseURL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`  
            },
            body: JSON.stringify(script)
        });
        if (!response.ok) {
            throw new Error('Failed to create script');
        }
        const newScript = await response.json();
        return newScript;
    } catch (error) {
        console.error("Failed to add script: ", error);
        throw error;
    }
};

export const deleteScript = async (id) => {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`${baseURL}${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to delete script');
        }
    } catch (error) {
        console.error("Failed to delete script: ", error);
        throw error;
    }
};


export const saveScript = async (groupedElements) => {
    try {
      const response = await fetch('/api/save-script', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(groupedElements),
      });
      const data = await response.json();
      console.log('Success:', data);
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

export const saveScene = async (scene) => {
    console.log('Saving scene:', scene); 
  };
  
  export const saveElement = async (element) => {
    console.log('Saving element:', element); 
  };
  
  export const saveDialogue = async (dialogue) => {
    console.log('Saving dialogue:', dialogue); 
  };
  