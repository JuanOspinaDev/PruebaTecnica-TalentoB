import React, { useState } from 'react';
import { MdPerson, MdCreate } from 'react-icons/md';
import { register } from '../../services/authService'; 

import './RegistrationForm.css';

function RegistrationForm({ closeModal }) {

  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    role: ''
  });

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    role: ''
  });

  const validate = () => {
    let newErrors = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      role: ''
    };
  
    const isFirstNameEmpty = !formData.firstname.trim();
    const isLastNameEmpty = !formData.lastname.trim();
    if (isFirstNameEmpty || isLastNameEmpty) {
      newErrors.nameCommon = 'El nombre y apellido son obligatorios.';
    } else {
      if (isFirstNameEmpty) newErrors.firstname = 'El nombre es obligatorio.';
      if (isLastNameEmpty) newErrors.lastname = 'El apellido es obligatorio.';
    }
  
    if (!formData.username.trim()) newErrors.username = 'El nombre de usuario es obligatorio.';
    if (formData.password.length < 6) newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
    if (!['regular', 'guionista'].includes(formData.role)) {
      newErrors.role = 'Selecciona un rol válido.';
    }
  
    setErrors(newErrors);
    return Object.values(newErrors).every(x => x === ""); 
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (role) => {
    setFormData((prevFormData) => ({ ...prevFormData, role }));
    console.log("Role set to:", role);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      console.error('Validación fallida en el cliente');
      return;
    }
    try {
      const data = await register(formData);
      console.log('Registro exitoso', data);
      closeModal();
    } catch (error) {
      console.error('Error en el registro', error);
      setErrors(prev => ({ ...prev, general: 'Error al registrar. Intenta de nuevo.' }));
    }
  };

  return (
    <form className="reg-form" onSubmit={handleSubmit}>
      <h2 className="reg-heading">Registrarte</h2>
      
      <div className="name-row">
        <input className="reg-input name-input" name="firstname" type="text" placeholder="Nombre" value={formData.firstname} onChange={handleChange} />
        <input className="reg-input name-input" name="lastname" type="text" placeholder="Apellido" value={formData.lastname} onChange={handleChange} />
      </div>
      {errors.nameCommon && <div className="error-message">{errors.nameCommon}</div>} 

      <input className="reg-input" name="username" type="username" placeholder="Username" value={formData.username} onChange={handleChange} />
      {errors.username && <div className="error-message">{errors.username}</div>}

      <input className="reg-input" name="password" type="password" placeholder="Contraseña nueva" value={formData.password} onChange={handleChange} />
      {errors.password && <div className="error-message">{errors.password}</div>}

      <div className="role-buttons">
        <div>
          <button type="button" className={`role-button ${formData.role === 'regular' ? 'active' : ''}`} onClick={() => handleRoleChange('regular')}>
          <MdPerson size={24} />
          </button>
          <span>Actor</span>
        </div>
        <div>
          <button type="button" className={`role-button ${formData.role === 'guionista' ? 'active' : ''}`} onClick={() => handleRoleChange('guionista')}>
          <MdCreate size={24} />
          </button>
          <span>Guionista</span>
        </div>
      </div>
      
      <button className="reg-button" type="submit">Registrarte</button>
      {errors.role && <div className="error-message">{errors.role}</div>}
      {errors.general && <div className="error-message">{errors.general}</div>}

    </form>
  );
}

export default RegistrationForm;
