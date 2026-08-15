import React from 'react'


type nomeUser = {
    nome: string
}



const TaskForm = ({nome}: nomeUser) => {
  return (
    <div>
        <h1> ola {nome}</h1>
        <h1>bem vindo a lista de tarefas</h1>
        <p>digite sua nova tarefa aqui</p>
    </div>
  )
}

export default TaskForm