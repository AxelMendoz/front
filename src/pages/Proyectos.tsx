import React from 'react';
import Sidebar from '../components/SideBar';
import '../Styles/Proyectos.css';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const Proyectos = () => {
  const proyectos = [
    { nombre: 'E-COMMERCE', status: 'En Progreso', fecha: '12/04/25' },
    { nombre: 'APP MOBILE', status: 'Planeando', fecha: '1/01/24' },
    { nombre: 'E-COMMERCE 2', status: 'En Progreso', fecha: '20/01/25' }
  ];

  return (
    <div className="proyectos-container">
      <Sidebar />
      <div className="proyectos-content">
        <div className="header">
          <h1>PROYECTOS</h1>
          <button className="nuevo-proyecto-btn">
            NUEVO PROYECTO <FaPlus />
          </button>
        </div>
        <table className="proyectos-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {proyectos.map((proyecto, index) => (
              <tr key={index}>
                <td>{proyecto.nombre}</td>
                <td className={proyecto.status === 'En Progreso' ? 'status progreso' : 'status planeando'}>
                  {proyecto.status}
                </td>
                <td>{proyecto.fecha}</td>
                <td>
                  <FaEdit className="icon edit" />
                  <FaTrash className="icon delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Proyectos;
