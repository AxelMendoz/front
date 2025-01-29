import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/Login.css';

function FormsRegistrar() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateUsername = (username: string) => {
    const usernameRegex = /^[a-zA-Z0-9]{1,8}$/;
    return usernameRegex.test(username);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8 && /[0-9]/.test(password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setMessage('Por favor, completa todos los campos.');
      return;
    }

    if (!validateUsername(formData.username)) {
      setMessage('El usuario debe tener máximo 8 caracteres y solo contener letras y números.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setMessage('El correo electrónico no es válido.');
      return;
    }

    if (!validatePassword(formData.password)) {
      setMessage('La contraseña debe tener al menos 8 caracteres, incluyendo un número.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage('Las contraseñas no coinciden.');
      return;
    }

    setMessage('¡Registro exitoso!');
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  const handleLoginRedirect = () => {
    navigate('/');
  };

  return (
    <div className="registerContainer">
      <div className="seccionIzquierda">
        <div className="contentBox">
          <h1>Regístrate</h1>
          <p>Crea una cuenta e infórmate de las estadísticas del uso de la tecnología en jóvenes.</p>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="username"
              placeholder="Usuario"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
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
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit">Registrar</button>
          </form>
          <p>
            ¿Ya tienes una cuenta?{' '}
            <span onClick={handleLoginRedirect} className="loginLink">
              Inicia sesión
            </span>
          </p>
          {message && <p className="successMessage">{message}</p>}
        </div>
      </div>
      <div className="seccionRight"></div>
    </div>
  );
}

export default FormsRegistrar;