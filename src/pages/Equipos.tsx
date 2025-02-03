import React from 'react';
import '../Styles/Equipos.css';
import Sidebar from '../components/SideBar';
import { FaPlus, FaUsers } from 'react-icons/fa';

const Equipos = () => {
  return (
    <div className="equiposContainer">
      <Sidebar />
      
      {/* Título */}
      <div className="titleContainer">
        <h1 className="title">EQUIPOS</h1>
      </div>

      {/* Botón de Nuevo Equipo */}
      <button className="newTeamButton">
        <span>Nuevo Equipo</span>
        <FaPlus />
      </button>

      <div className="equiposGrid">
        <div className="teamCard" id="equipo1">
          <h3>FRONTEND TEAM</h3>
          <p>E-Commerce</p>
          <FaUsers />
          <p className="members-count">5 miembros</p>
        </div>
        <div className="teamCard" id="equipo2">
          <h3>BACKEND TEAM</h3>
          <p>App Mobile</p>
          <FaUsers />
          <p className="members-count">2 miembros</p>
        </div>

        <div className="teamCard" id="equipo3">
          <h3>DESIGN TEAM</h3>
          <p>UX/UI</p>
          <FaUsers />
          <p className="members-count">4 miembros</p>
        </div>

        <div className="teamCard" id="equipo4">
          <h3>DEVOPS TEAM</h3>
          <p>Infrastructure</p>
          <FaUsers />
          <p className="members-count">3 miembros</p>
        </div>
      </div>
    </div>
  );
};

export default Equipos;
