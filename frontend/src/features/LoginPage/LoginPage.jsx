import React, { useState } from 'react';
import { GiFeather } from 'react-icons/gi'; 
import { useAuth } from '../../hooks/useAuth';
import Modal from '../../components/Modal/Modal';
import RegistrationForm from '../Registration/RegistrationForm';
import './LoginPage.css';

function LoginPage() {
  const [username, setEmail] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });
  
  const validate = () => {
    let newErrors = {
      username: '',
      password: ''
    };
  
    if (!username.trim()) {
      newErrors.username = 'El correo electrónico es obligatorio.';
    } else if (username.length < 6) {
      newErrors.username = 'El usuario debe tener al menos 6 caracteres.';
    }
  
    if (password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }
  
    setErrors(newErrors);
    return Object.values(newErrors).every(x => x === ""); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) {
      console.error('Validación fallida en el cliente');
      return;
    }
    try {
      await login(username, password);
      console.log("Ingreso exitoso");
    } catch (error) {
      console.error("Error en el ingreso", error);
      setErrors({ ...errors, general: 'Error al intentar iniciar sesión. Intenta de nuevo.' });
    }
  };

  const handleRegister = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  return (
  <div className="login-container">
    <div className="icon-and-text-container">
      <GiFeather size={60} color="white" style={{ alignSelf: 'center' }} className='feather-icon' />
      <div className="login-text">
        <h2>ScriptFlow</h2>
        <p>ScriptFlow te ayuda a organizar, crear y manejar tus guiones de manera eficiente y sencilla.</p>
      </div>
    </div>
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={e => setEmail(e.target.value)} />
        {errors.username && <div className="error-message">{errors.username}</div>}

        <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
        {errors.password && <div className="error-message">{errors.password}</div>}

        <button type="submit" className='login'>Iniciar sesión</button>
        <div className="links">
          <a href="#!">¿Olvidaste tu contraseña?</a>
          <hr />
          <button type="button" className="create-new" onClick={handleRegister}>Crear cuenta nueva</button>
        </div>
      </form>
    </div>
    <Modal isOpen={isModalOpen} closeModal={closeModal}>
      <RegistrationForm closeModal={() => setModalOpen(false)} />
    </Modal>
  </div>
);

}

export default LoginPage;
