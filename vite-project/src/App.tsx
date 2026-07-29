import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Funcionarios'
import Detalhes from './pages/Detalhes'
import Funcionarios from './pages/Funcionarios'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Funcionarios />}/>
          <Route path='/detalhes/:id' element={<Detalhes />} />
          <Route path='/home'  element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App