import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/Login.css'; 

const InputLogin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 5 && /[0-9]/.test(password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      alert('Por favor, ingresa tus credenciales.');
      return;
    }

    if (!validateEmail(formData.username)) {
      setMessage('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    if (!validatePassword(formData.password)) {
      setMessage('La contraseña debe tener al menos 5 caracteres, incluyendo un número.');
      return;
    }

    alert('¡Inicio de sesión exitoso!');
    navigate('/dashboard');
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
        {message && <p className="errorMessage">{message}</p>}
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