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
