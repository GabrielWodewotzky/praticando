import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FormularioFuncionario from './pages/FormularioFuncionario'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FormularioFuncionario />}/>
      </Routes>
    </div>
  )
}

export default App