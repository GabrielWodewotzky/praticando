
type AdicionarTarefa = {
    titulo: string
    adicionar: (valor: string) => void 
}


const TaskItem = ({titulo, adicionar}: AdicionarTarefa) => {
  return (
    <div>
        <input placeholder='digite aqui' value={titulo} onChange={(e) => adicionar(e.target.value)} />
    </div>
  )
}

export default TaskItem