import React, { useState } from 'react'
import type { Aluno } from './pages/AlunoCard'
import AlunoCard from './pages/AlunoCard'

const App = () => {

const [alunos, setAlunos] = useState<Aluno[]>([
 {nome: 'samuel', faltas: 2, ativo: true, id: 1}, {nome: 'flavio', faltas: 1, ativo: true, id: 2}
])


const AddNovasFaltas = (add: number) => {
  setAlunos((addAlunos) => addAlunos.map((alunos) => alunos.id === add ? {...alunos, faltas: alunos.faltas + 1} : alunos))
}


  return (
    <div className='bg-blue-600 text-white font-normal flex flex-col gap-5'>
        {alunos.map((aluno) => (
          
          
          <AlunoCard 
          key={aluno.id} 
          Aluno={aluno}
          addFaltas={AddNovasFaltas}
           />  
           
          
        ))}
    </div>
  )
}

export default App


