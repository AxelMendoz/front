import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import '../Styles/Recursos.css';

const Recursos = () => {
  const [recursosProyectos, setRecursosProyectos] = useState([
    {
      proyecto: 'E-COMMERCE',
      equipo: 'Equipo Alfa',
      pc: 'PC-001',
      inversion: '$15,000 USD',
      tiempoRestante: '3 meses',
      recursos: [
        { nombre: 'Servidor AWS', tipo: 'Material', disponibilidad: 'Disponible' },
        { nombre: 'Base de datos MySQL', tipo: 'Material', disponibilidad: 'Disponible' },
        { nombre: 'Figma', tipo: 'Software', disponibilidad: 'Disponible' },
        { nombre: 'Desarrollador', tipo: 'Humano', disponibilidad: 'No Disponible' },
        { nombre: 'Diseñador UX/UI', tipo: 'Humano', disponibilidad: 'No Disponible' }
      ],
      nuevoRecurso: { nombre: '', tipo: 'Material', disponibilidad: 'Disponible' }
    },
    {
      proyecto: 'APP MOBILE',
      equipo: 'Equipo Beta',
      pc: 'PC-002',
      inversion: '$10,000 USD',
      tiempoRestante: '5 meses',
      recursos: [
        { nombre: 'React Native', tipo: 'Software', disponibilidad: 'Disponible' },
        { nombre: 'Firebase', tipo: 'Software', disponibilidad: 'Disponible' },
        { nombre: 'Notion', tipo: 'Software', disponibilidad: 'Disponible' },
        { nombre: 'Tester QA', tipo: 'Humano', disponibilidad: 'No Disponible' },
        { nombre: 'Especialista en UI', tipo: 'Humano', disponibilidad: 'No Disponible' }
      ],
      nuevoRecurso: { nombre: '', tipo: 'Material', disponibilidad: 'Disponible' }
    }
  ]);

  const agregarRecurso = (index: number) => {
    if (recursosProyectos[index].nuevoRecurso.nombre.trim() === '') return;
    
    const nuevosRecursos = [...recursosProyectos];
    nuevosRecursos[index].recursos.push(nuevosRecursos[index].nuevoRecurso);
    nuevosRecursos[index].nuevoRecurso = { nombre: '', tipo: 'Material', disponibilidad: 'Disponible' };
    setRecursosProyectos(nuevosRecursos);
  };

  return (
    <div className="recursos-container">
      <Sidebar />
      <div className="recursos-content">
        <h1>RECURSOS</h1>
        <div className="recursos-cards">
          {recursosProyectos.map((recurso, index) => (
            <div key={index} className="recurso-card">
              <h2>{recurso.proyecto}</h2>
              <p><strong>Equipo:</strong> {recurso.equipo}</p>
              <p><strong>PC Asignada:</strong> {recurso.pc}</p>
              <p><strong>Inversión:</strong> {recurso.inversion}</p>
              <p><strong>Tiempo Restante:</strong> {recurso.tiempoRestante}</p>
              
              <h3>Recursos Asignados</h3>
              <ul className="lista-recursos">
                {recurso.recursos.map((r, i) => (
                  <li key={i} className={r.disponibilidad === 'Disponible' ? 'disponible' : 'no-disponible'}>
                    {r.nombre} ({r.tipo}) - {r.disponibilidad}
                  </li>
                ))}
              </ul>

              <div className="agregar-recurso-container">
                <input
                  type="text"
                  className="input-recurso"
                  placeholder="Nombre del recurso..."
                  value={recurso.nuevoRecurso.nombre}
                  onChange={(e) => {
                    const nuevosRecursos = [...recursosProyectos];
                    nuevosRecursos[index].nuevoRecurso.nombre = e.target.value;
                    setRecursosProyectos(nuevosRecursos);
                  }}
                />
                <select
                  className="select-recurso"
                  value={recurso.nuevoRecurso.tipo}
                  onChange={(e) => {
                    const nuevosRecursos = [...recursosProyectos];
                    nuevosRecursos[index].nuevoRecurso.tipo = e.target.value;
                    setRecursosProyectos(nuevosRecursos);
                  }}
                >
                  <option value="Material">Material</option>
                  <option value="Humano">Humano</option>
                  <option value="Software">Software</option>
                </select>
                <select
                  className="select-recurso"
                  value={recurso.nuevoRecurso.disponibilidad}
                  onChange={(e) => {
                    const nuevosRecursos = [...recursosProyectos];
                    nuevosRecursos[index].nuevoRecurso.disponibilidad = e.target.value;
                    setRecursosProyectos(nuevosRecursos);
                  }}
                >
                  <option value="Disponible">Disponible</option>
                  <option value="No Disponible">No Disponible</option>
                </select>
                <button className="btn-agregar" onClick={() => agregarRecurso(index)}>
                  Agregar Recurso
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recursos;
