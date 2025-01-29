import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/Login.css'; 

const InputLogin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.username && formData.password) {
      alert('¡Inicio de sesión exitoso!');
      navigate('/dashboard');
    } else {
      alert('Por favor, ingresa tus credenciales.');
    }
  };

  const handleRegister = () => {
    navigate('/registrar');
  };

  return (
    <div className="leftSection">
      <div className="contentBox">
        <h1>Inicia sesión</h1>
        <p>Conoce las estadísticas del uso excesivo de tecnologías en jóvenes.</p>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="username"
            placeholder="Correo electrónico"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Iniciar sesión</button>
        </form>
        <p>
          ¿No tienes una cuenta?{' '}
          <span onClick={handleRegister} className="registerLink">
            Regístrate
          </span>
        </p>
      </div>
    </div>
  );
};

export default InputLogin;
