import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Redirige a la página de inicio o login
  };

  const handleViewPhoto = () => {
    navigate('../page/verfoto'); // Redirige a la página "Ver Foto"
  };

  const handleEditProfile = () => {
    navigate('/editar-perfil'); // Redirige a la página "Editar Perfil"
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div>
          <h2>Bienvenido al Dashboard</h2>
          <p>Información general sobre el uso de tecnología por adolescentes.</p>
        </div>
        <div 
          className={styles.profileIcon} 
          onMouseEnter={() => setShowOptions(true)} 
          onMouseLeave={() => setShowOptions(false)}
        >
          <span className={styles.icon}>👤</span>
          {showOptions && (
            <div className={styles.profileOptions}>
              <button onClick={handleViewPhoto}>Ver Foto</button>
              <button onClick={handleEditProfile}>Editar Perfil</button>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
