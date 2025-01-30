import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { FaUserCircle } from 'react-icons/fa';
import '../Styles/Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Proyectos Realizados',
        data: [5, 10, 8, 15, 20, 18],
        borderColor: '#F472B6',
        backgroundColor: 'rgba(244, 114, 182, 0.5)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <div className="profile-card">
          <div className="profile-info">
            <h2>Nombre del Usuario</h2>
            <p>Administrador</p>
          </div>
          <div 
            className="user-icon-container" 
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <FaUserCircle className="user-icon" />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <ul>
                  <li>Ver Perfil</li>
                  <li>Configuración</li>
                  <li>Cerrar Sesión</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="metrics">
          <div className="metric-card">
            <h3>Proyectos Totales</h3>
            <p>120</p>
          </div>
          <div className="metric-card">
            <h3>Tareas Pendientes</h3>
            <p>25</p>
          </div>
          <div className="metric-card">
            <h3>Usuarios Activos</h3>
            <p>15</p>
          </div>
        </div>

        <div className="chart-container">
          <h3>Proyectos Realizados por Mes</h3>
          <Line data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
