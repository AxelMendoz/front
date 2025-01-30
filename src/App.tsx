import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Registrar from './pages/Registrar'
import Sidebar from './components/SideBar'
import Equipos from './pages/Equipos'
import Proyectos from './pages/Proyectos'
import Recursos from './pages/Recursos'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registrar" element={<Registrar /> } />
      <Route path="/dashboard" element={<Dashboard /> } />
      <Route path="/proyectos" element={< Proyectos /> } />
      <Route path="/equipos" element={< Equipos /> } />
      <Route path="/recursos" element={< Recursos /> } />
      </Routes>
    </>
  )
}

export default App
