import React, { useState } from 'react'
import TaskForm from './pages/TaskForm'
import TaskItem from './pages/TaskItem'
import TaskList from './pages/TaskList'


export type Tarefa = {

    titulo: string
}

const App = () => {

const [tarefa, setTarefa] = useState<Tarefa[]>([{titulo: 'estudar react'}])

const [tarefaInput, setTarefaInput] = useState('')

const adicionar = () => {
    setTarefa([
        ...tarefa,
        {
            titulo: tarefaInput
        }
    ])
    setTarefaInput('')
}


const remover = (id: string) => {
    setTarefa(tarefa.filter(fill => fill.titulo !== id))
}




  return (
    <div>
        <TaskForm nome={'gabriel'} />
        <TaskItem titulo={tarefaInput}  adicionar={setTarefaInput} />
        <button onClick={adicionar}>adicioanar</button>
        <TaskList lista={tarefa}  remover={remover}  />
    </div>
  )
}

export default App

