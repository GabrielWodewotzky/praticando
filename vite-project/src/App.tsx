import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Produtos from './pages/Produtos'

const App = () => {
  return (
    <div>
     
      <Routes>

          <Route path='/' element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route  path="/frutas" element={<Produtos />}/>
      </Routes>
    </div>
  )
}

export default App





