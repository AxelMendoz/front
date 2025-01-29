import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Registrar from './pages/Registrar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registrar" element={<Registrar /> } />
      </Routes>
    </>
  )
}

export default App
