import React from 'react';
import { FaHome, FaProjectDiagram, FaUsers, FaToolbox, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../Styles/Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <h2 onClick={() => handleNavigation('/dashboard')} className="sidebar-header">
        <FaHome className="icon" /> INICIO
      </h2>
      <ul>
        <li onClick={() => handleNavigation('/proyectos')}>
          <FaProjectDiagram className="icon" /> PROYECTOS
        </li>
        <li onClick={() => handleNavigation('/equipos')}>
          <FaUsers className="icon" /> EQUIPOS
        </li>
        <li onClick={() => handleNavigation('/recursos')}>
          <FaToolbox className="icon" /> RECURSOS
        </li>
      </ul>
      <div className="logout" onClick={() => handleNavigation('/cerrar-sesion')}>
        <FaSignOutAlt className="icon" /> CERRAR SESIÓN
      </div>
    </div>
  );
};

export default Sidebar;
