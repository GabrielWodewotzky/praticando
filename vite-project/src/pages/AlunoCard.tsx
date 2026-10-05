 export interface Aluno {

    id: number
    nome: string 
    faltas: number
    ativo: boolean 
}


interface AlunosProps {
    Aluno: Aluno
    addFaltas: (add: number) => void
}




const AlunoCard = ({ Aluno, addFaltas}: AlunosProps) => {
  return (
    <div>
        <div>
            <h3>{Aluno.nome}</h3>
            <p className="text-red-500">numero de faltas {Aluno.faltas}</p>
            <button className="bg-gray-700 rounded-2xl text-white p-1.5" onClick={() => addFaltas(Aluno.id)}>adicionar faltas</button>
            <p className={`${Aluno.ativo ? 'bg-green-400' : 'bg-red-600'}`}>matricula ativa: {Aluno.ativo ? 'ativo' : 'aluno nao ativo'}</p>
            <p>matricula do aluno: {Aluno.id}</p>
        </div>
    </div>
  )
}

export default AlunoCard