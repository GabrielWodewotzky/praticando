
import type { Tarefa } from "../App"


type Lista = {
  lista: Tarefa[]
  remover: (remove: string) => void
}

const TaskList = ({ lista, remover }: Lista) => {
  return (
    <div>
      {lista.map((tarefa, index) => (
        <div key={index}>
          <p>{tarefa.titulo}</p>
          <button onClick={() => remover(tarefa.titulo)}>remover</button>
        </div>
      ))}
    </div>
  )
}

export default TaskList