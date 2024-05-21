export async function authenticate(username, password) {
  try {
      const response = await fetch('http://localhost:3000/api/users/login', { 
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      if (!response.ok) {
          throw new Error(data.message || 'Algo salió mal');
      }

      if (data.token) {
          localStorage.setItem('token', data.token);
      }
      console.log(data.token)
      return data; 
  } catch (error) {
      console.error('Error de autenticación:', error);
      throw error;
  }
}

export const register = async (formData) => {
  try {
    const response = await fetch('http://localhost:3000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

