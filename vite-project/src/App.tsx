import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Produtos from './pages/Produtos'
import ListaTarefas from './pages/ListaTarefas'
import Funcionarios from './pages/Funcionarios'


const App = () => {
  return (
    <div>
      <Produtos />
      <ListaTarefas />
      <Funcionarios />
    </div>
  )
}

export default App