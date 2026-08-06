import { useState } from "react"

type Tarefa = {
  id: number
  descricao: string
  concluida: boolean
}



const ListaTarefas = () => {

const [tarefas, setTarefas] = useState<Tarefa[]>([
    {id: 1, descricao: 'estudar React', concluida: false},
    {id: 2, descricao: 'praticar exercicios', concluida: false}


])


const ConcluirTarefa = (id: number) => {
    
    setTarefas(
    tarefas.map((tarefa) => (
        tarefa.id === id ? {...tarefa, concluida: !tarefa.concluida} : tarefa

        
    )))
}


  return (
    <div>
        <div>
            <ul>
                {tarefas.map((tarefa) => (
                    <li key={tarefa.id}>
                        {tarefa.descricao}
                        {tarefa.concluida ? '  Concluida!' : '  Incompleta'}
                        <button onClick={() => ConcluirTarefa(tarefa.id)}>concluir tarefa</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ListaTarefas