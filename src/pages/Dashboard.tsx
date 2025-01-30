import React from 'react';
import Sidebar from '../components/SideBar';
// Asegúrate de que la ruta sea correcta

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Hola mundo</h1>
        {/* Aquí puedes agregar más contenido del dashboard */}
      </div>
    </div>
  );
};

export default Dashboard;