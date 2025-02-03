import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/Login.css';

function FormsRegistrar() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    verificationCode: '',
  });
  const [message, setMessage] = useState('');
  const [step, setStep] = useState(1); // Paso 1: Ingresar correo, Paso 2: Ingresar código
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Para manejar el estado de carga
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Paso 1: Enviar correo y generar código
  const handleSubmitStep1 = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar campos de correo y nombre de usuario
    if (!formData.username || !formData.email) {
      setMessage('Por favor, completa todos los campos.');
      return;
    }

    setIsLoading(true); // Activar el estado de carga

    try {
      // Enviar el correo y generar código en el backend
      const response = await fetch('http://localhost:3000/auth/send-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
        }),
      });

      const data = await response.json();

      if (data.status === 'error') {
        setMessage(data.message);
      } else {
        setMessage('¡Código de verificación enviado a tu correo!');
        setVerificationCodeSent(true);
        setStep(2); // Pasar al paso 2 para ingresar el código
      }
    } catch (error) {
      console.error('Error al enviar el código', error);
      setMessage('Error al enviar el código. Intenta nuevamente.');
    } finally {
      setIsLoading(false); // Desactivar el estado de carga
    }
  };

  // Paso 2: Verificar código y registrar
  const handleSubmitStep2 = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.verificationCode) {
      setMessage('Por favor, ingresa el código de verificación.');
      return;
    }

    setIsLoading(true); // Activar el estado de carga

    try {
      // Verificar el código de verificación con el backend
      const response = await fetch('http://localhost:3000/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          verificationCode: formData.verificationCode,
        }),
      });

      const data = await response.json();

      if (data.status === 'error') {
        setMessage(data.message);
      } else {
        // Código válido, completar el registro
        const response2 = await fetch('http://localhost:3000/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            username: formData.username,
            password: formData.password,
          }),
        });

        const data2 = await response2.json();

        if (data2.status === 'error') {
          setMessage(data2.message);
        } else {
          setMessage('¡Registro exitoso!');
          setTimeout(() => {
            navigate('/'); // Redirige al login
          }, 500);
        }
      }
    } catch (error) {
      console.error('Error al verificar el código', error);
      setMessage('Error al verificar el código. Intenta nuevamente.');
    } finally {
      setIsLoading(false); // Desactivar el estado de carga
    }
  };

  return (
    <div className="registerContainer">
      <div className="seccionIzquierda">
        <div className="contentBox">
          <h1>Regístrate</h1>
          <p>Crea una cuenta e infórmate de las estadísticas del uso de la tecnología en jóvenes.</p>
          {step === 1 ? (
            <form onSubmit={handleSubmitStep1} className="form">
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
              <button type="submit" disabled={isLoading}>
                Enviar código de verificación
              </button>
            </form>
          ) : (
            <div>
              <p>Se ha enviado un código de verificación a tu correo. Ingresa el código para completar el registro:</p>
              <form onSubmit={handleSubmitStep2} className="form">
                <input
                  type="text"
                  name="verificationCode"
                  placeholder="Código de verificación"
                  value={formData.verificationCode || ''}
                  onChange={handleChange}
                  required
                />
                <button type="submit" disabled={isLoading}>
                  Verificar código
                </button>
              </form>
            </div>
          )}
          <p>{message}</p>
        </div>
      </div>
      <div className="seccionRight"></div>
    </div>
  );
}

export default FormsRegistrar;
